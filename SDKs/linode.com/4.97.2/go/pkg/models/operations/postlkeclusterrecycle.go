package operations

import (
	"openapi/pkg/models/shared"
)

type PostLkeClusterRecyclePathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type PostLkeClusterRecycleSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type PostLkeClusterRecycleDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type PostLkeClusterRecycleRequest struct {
	PathParams PostLkeClusterRecyclePathParams
	Security   PostLkeClusterRecycleSecurity
}

type PostLkeClusterRecycleResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	PostLkeClusterRecycle200ApplicationJSONObject     map[string]interface{}
	PostLkeClusterRecycleDefaultApplicationJSONObject *PostLkeClusterRecycleDefaultApplicationJSON
}
