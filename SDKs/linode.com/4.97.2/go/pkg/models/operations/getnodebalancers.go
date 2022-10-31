package operations

import (
"openapi/pkg/models/shared")

type GetNodeBalancersQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetNodeBalancersSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetNodeBalancersSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetNodeBalancersSecurity struct {
    Option1 *GetNodeBalancersSecurityOption1 `security:"option"`
    Option2 *GetNodeBalancersSecurityOption2 `security:"option"`
    
}

type GetNodeBalancersRequest struct {
    QueryParams GetNodeBalancersQueryParams 
    Security GetNodeBalancersSecurity 
    
}

type GetNodeBalancers200ApplicationJSON struct {
    Data []shared.NodeBalancer `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetNodeBalancersDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetNodeBalancersResponse struct {
    ContentType string 
    StatusCode int64 
    GetNodeBalancers200ApplicationJSONObject *GetNodeBalancers200ApplicationJSON 
    GetNodeBalancersDefaultApplicationJSONObject *GetNodeBalancersDefaultApplicationJSON 
    
}

