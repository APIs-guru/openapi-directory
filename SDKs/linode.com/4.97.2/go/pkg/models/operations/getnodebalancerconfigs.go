package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodeBalancerConfigsPathParams struct {
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type GetNodeBalancerConfigsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetNodeBalancerConfigsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetNodeBalancerConfigsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetNodeBalancerConfigsSecurity struct {
	Option1 *GetNodeBalancerConfigsSecurityOption1 `security:"option"`
	Option2 *GetNodeBalancerConfigsSecurityOption2 `security:"option"`
}

type GetNodeBalancerConfigsRequest struct {
	PathParams  GetNodeBalancerConfigsPathParams
	QueryParams GetNodeBalancerConfigsQueryParams
	Security    GetNodeBalancerConfigsSecurity
}

type GetNodeBalancerConfigs200ApplicationJSON struct {
	Data    []shared.NodeBalancerConfig `json:"data"`
	Page    *int64                      `json:"page"`
	Pages   *int64                      `json:"pages"`
	Results *int64                      `json:"results"`
}

type GetNodeBalancerConfigsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetNodeBalancerConfigsResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetNodeBalancerConfigs200ApplicationJSONObject     *GetNodeBalancerConfigs200ApplicationJSON
	GetNodeBalancerConfigsDefaultApplicationJSONObject *GetNodeBalancerConfigsDefaultApplicationJSON
}
