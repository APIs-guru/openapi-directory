package operations

import (
	"openapi/pkg/models/shared"
)

type PostLkeClusterPoolsPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type PostLkeClusterPoolsRequestBody struct {
	Count int64          `json:"count"`
	Disks []shared.Items `json:"disks,omitempty"`
	Tags  []string       `json:"tags,omitempty"`
	Type  string         `json:"type"`
}

type PostLkeClusterPoolsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type PostLkeClusterPoolsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type PostLkeClusterPoolsRequest struct {
	PathParams PostLkeClusterPoolsPathParams
	Request    PostLkeClusterPoolsRequestBody `request:"mediaType=application/json"`
	Security   PostLkeClusterPoolsSecurity
}

type PostLkeClusterPoolsResponse struct {
	ContentType                                     string
	LkeNodePool                                     *shared.LkeNodePool
	StatusCode                                      int64
	PostLkeClusterPoolsDefaultApplicationJSONObject *PostLkeClusterPoolsDefaultApplicationJSON
}
