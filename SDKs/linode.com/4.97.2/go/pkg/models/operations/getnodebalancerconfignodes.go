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

type GetNodeBalancerConfigNodesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetNodeBalancerConfigNodesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetNodeBalancerConfigNodesSecurity struct {
	Option1 *GetNodeBalancerConfigNodesSecurityOption1 `security:"option"`
	Option2 *GetNodeBalancerConfigNodesSecurityOption2 `security:"option"`
}

type GetNodeBalancerConfigNodesRequest struct {
	PathParams  GetNodeBalancerConfigNodesPathParams
	QueryParams GetNodeBalancerConfigNodesQueryParams
	Security    GetNodeBalancerConfigNodesSecurity
}

type GetNodeBalancerConfigNodes200ApplicationJSON struct {
	Data    []shared.NodeBalancerNode `json:"data"`
	Page    *int64                    `json:"page"`
	Pages   *int64                    `json:"pages"`
	Results *int64                    `json:"results"`
}

type GetNodeBalancerConfigNodesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetNodeBalancerConfigNodesResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	GetNodeBalancerConfigNodes200ApplicationJSONObject     *GetNodeBalancerConfigNodes200ApplicationJSON
	GetNodeBalancerConfigNodesDefaultApplicationJSONObject *GetNodeBalancerConfigNodesDefaultApplicationJSON
}
