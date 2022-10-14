package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLkeClusterRequestBody struct {
	K8sVersion string                          `json:"k8s_version"`
	Label      string                          `json:"label"`
	NodePools  []shared.LkeNodePoolRequestBody `json:"node_pools"`
	Region     string                          `json:"region"`
	Tags       []string                        `json:"tags,omitempty"`
}

type CreateLkeClusterSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateLkeClusterSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateLkeClusterSecurity struct {
	Option1 *CreateLkeClusterSecurityOption1 `security:"option"`
	Option2 *CreateLkeClusterSecurityOption2 `security:"option"`
}

type CreateLkeClusterRequest struct {
	Request  *CreateLkeClusterRequestBody `request:"mediaType=application/json"`
	Security CreateLkeClusterSecurity
}

type CreateLkeClusterDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateLkeClusterResponse struct {
	ContentType                                  string
	LkeCluster                                   *shared.LkeCluster
	StatusCode                                   int64
	CreateLkeClusterDefaultApplicationJSONObject *CreateLkeClusterDefaultApplicationJSON
}
