package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterAPIEndpointsPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetLkeClusterAPIEndpointsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLkeClusterAPIEndpointsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLkeClusterAPIEndpointsSecurity struct {
	Option1 *GetLkeClusterAPIEndpointsSecurityOption1 `security:"option"`
	Option2 *GetLkeClusterAPIEndpointsSecurityOption2 `security:"option"`
}

type GetLkeClusterAPIEndpointsRequest struct {
	PathParams GetLkeClusterAPIEndpointsPathParams
	Security   GetLkeClusterAPIEndpointsSecurity
}

type GetLkeClusterAPIEndpoints200ApplicationJSONData struct {
	Endpoint *string `json:"endpoint"`
}

type GetLkeClusterAPIEndpoints200ApplicationJSON struct {
	Data    []GetLkeClusterAPIEndpoints200ApplicationJSONData `json:"data"`
	Page    *int64                                            `json:"page"`
	Pages   *int64                                            `json:"pages"`
	Results *int64                                            `json:"results"`
}

type GetLkeClusterAPIEndpointsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLkeClusterAPIEndpointsResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	GetLkeClusterAPIEndpoints200ApplicationJSONObject     *GetLkeClusterAPIEndpoints200ApplicationJSON
	GetLkeClusterAPIEndpointsDefaultApplicationJSONObject *GetLkeClusterAPIEndpointsDefaultApplicationJSON
}
