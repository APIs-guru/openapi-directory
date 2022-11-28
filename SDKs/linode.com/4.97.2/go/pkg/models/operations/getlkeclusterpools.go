package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterPoolsPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetLkeClusterPoolsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLkeClusterPools200ApplicationJSON struct {
	Data    []shared.LkeNodePool `json:"data,omitempty"`
	Page    *int64               `json:"page,omitempty"`
	Pages   *int64               `json:"pages,omitempty"`
	Results *int64               `json:"results,omitempty"`
}

type GetLkeClusterPoolsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeClusterPoolsRequest struct {
	PathParams GetLkeClusterPoolsPathParams
	Security   GetLkeClusterPoolsSecurity
}

type GetLkeClusterPoolsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetLkeClusterPools200ApplicationJSONObject     *GetLkeClusterPools200ApplicationJSON
	GetLkeClusterPoolsDefaultApplicationJSONObject *GetLkeClusterPoolsDefaultApplicationJSON
}
