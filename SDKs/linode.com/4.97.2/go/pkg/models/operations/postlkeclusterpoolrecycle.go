package operations

import (
	"openapi/pkg/models/shared"
)

type PostLkeClusterPoolRecyclePathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
	PoolID    int64 `pathParam:"style=simple,explode=false,name=poolId"`
}

type PostLkeClusterPoolRecycleSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type PostLkeClusterPoolRecycleDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type PostLkeClusterPoolRecycleRequest struct {
	PathParams PostLkeClusterPoolRecyclePathParams
	Security   PostLkeClusterPoolRecycleSecurity
}

type PostLkeClusterPoolRecycleResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	PostLkeClusterPoolRecycle200ApplicationJSONObject     map[string]interface{}
	PostLkeClusterPoolRecycleDefaultApplicationJSONObject *PostLkeClusterPoolRecycleDefaultApplicationJSON
}
