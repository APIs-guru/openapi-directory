package operations

import (
	"openapi/pkg/models/shared"
)

type PostLkeClusterPoolRecyclePathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
	PoolID    int64 `pathParam:"style=simple,explode=false,name=poolId"`
}

type PostLkeClusterPoolRecycleSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type PostLkeClusterPoolRecycleSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type PostLkeClusterPoolRecycleSecurity struct {
	Option1 *PostLkeClusterPoolRecycleSecurityOption1 `security:"option"`
	Option2 *PostLkeClusterPoolRecycleSecurityOption2 `security:"option"`
}

type PostLkeClusterPoolRecycleRequest struct {
	PathParams PostLkeClusterPoolRecyclePathParams
	Security   PostLkeClusterPoolRecycleSecurity
}

type PostLkeClusterPoolRecycleDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type PostLkeClusterPoolRecycleResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	PostLkeClusterPoolRecycle200ApplicationJSONObject     map[string]interface{}
	PostLkeClusterPoolRecycleDefaultApplicationJSONObject *PostLkeClusterPoolRecycleDefaultApplicationJSON
}
