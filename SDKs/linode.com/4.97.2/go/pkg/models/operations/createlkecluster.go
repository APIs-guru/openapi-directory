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

type CreateLkeClusterSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateLkeClusterDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateLkeClusterRequest struct {
	Request  *CreateLkeClusterRequestBody `request:"mediaType=application/json"`
	Security CreateLkeClusterSecurity
}

type CreateLkeClusterResponse struct {
	ContentType                                  string
	LkeCluster                                   *shared.LkeCluster
	StatusCode                                   int64
	CreateLkeClusterDefaultApplicationJSONObject *CreateLkeClusterDefaultApplicationJSON
}
