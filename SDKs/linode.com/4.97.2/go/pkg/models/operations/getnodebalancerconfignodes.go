package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodeBalancerConfigNodesPathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type GetNodeBalancerConfigNodesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetNodeBalancerConfigNodesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetNodeBalancerConfigNodes200ApplicationJSON struct {
	Data    []shared.NodeBalancerNode `json:"data,omitempty"`
	Page    *int64                    `json:"page,omitempty"`
	Pages   *int64                    `json:"pages,omitempty"`
	Results *int64                    `json:"results,omitempty"`
}

type GetNodeBalancerConfigNodesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNodeBalancerConfigNodesRequest struct {
	PathParams  GetNodeBalancerConfigNodesPathParams
	QueryParams GetNodeBalancerConfigNodesQueryParams
	Security    GetNodeBalancerConfigNodesSecurity
}

type GetNodeBalancerConfigNodesResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	GetNodeBalancerConfigNodes200ApplicationJSONObject     *GetNodeBalancerConfigNodes200ApplicationJSON
	GetNodeBalancerConfigNodesDefaultApplicationJSONObject *GetNodeBalancerConfigNodesDefaultApplicationJSON
}
