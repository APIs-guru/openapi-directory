package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterPoolsPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetLkeClusterPoolsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLkeClusterPoolsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLkeClusterPoolsSecurity struct {
	Option1 *GetLkeClusterPoolsSecurityOption1 `security:"option"`
	Option2 *GetLkeClusterPoolsSecurityOption2 `security:"option"`
}

type GetLkeClusterPoolsRequest struct {
	PathParams GetLkeClusterPoolsPathParams
	Security   GetLkeClusterPoolsSecurity
}

type GetLkeClusterPools200ApplicationJSON struct {
	Data    []shared.LkeNodePool `json:"data"`
	Page    *int64               `json:"page"`
	Pages   *int64               `json:"pages"`
	Results *int64               `json:"results"`
}

type GetLkeClusterPoolsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLkeClusterPoolsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetLkeClusterPools200ApplicationJSONObject     *GetLkeClusterPools200ApplicationJSON
	GetLkeClusterPoolsDefaultApplicationJSONObject *GetLkeClusterPoolsDefaultApplicationJSON
}
