package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterAPIEndpointsPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetLkeClusterAPIEndpointsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

// GetLkeClusterAPIEndpoints200ApplicationJSONData
// The Kubernetes API server endpoints for this cluster.
type GetLkeClusterAPIEndpoints200ApplicationJSONData struct {
	Endpoint *string `json:"endpoint,omitempty"`
}

type GetLkeClusterAPIEndpoints200ApplicationJSON struct {
	Data    []GetLkeClusterAPIEndpoints200ApplicationJSONData `json:"data,omitempty"`
	Page    *int64                                            `json:"page,omitempty"`
	Pages   *int64                                            `json:"pages,omitempty"`
	Results *int64                                            `json:"results,omitempty"`
}

type GetLkeClusterAPIEndpointsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeClusterAPIEndpointsRequest struct {
	PathParams GetLkeClusterAPIEndpointsPathParams
	Security   GetLkeClusterAPIEndpointsSecurity
}

type GetLkeClusterAPIEndpointsResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	GetLkeClusterAPIEndpoints200ApplicationJSONObject     *GetLkeClusterAPIEndpoints200ApplicationJSON
	GetLkeClusterAPIEndpointsDefaultApplicationJSONObject *GetLkeClusterAPIEndpointsDefaultApplicationJSON
}
