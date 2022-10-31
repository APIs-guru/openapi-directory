package operations

import (
"openapi/pkg/models/shared")

type GetLinodeFirewallsPathParams struct {
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type GetLinodeFirewallsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetLinodeFirewallsSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetLinodeFirewallsSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetLinodeFirewallsSecurity struct {
    Option1 *GetLinodeFirewallsSecurityOption1 `security:"option"`
    Option2 *GetLinodeFirewallsSecurityOption2 `security:"option"`
    
}

type GetLinodeFirewallsRequest struct {
    PathParams GetLinodeFirewallsPathParams 
    QueryParams GetLinodeFirewallsQueryParams 
    Security GetLinodeFirewallsSecurity 
    
}

type GetLinodeFirewalls200ApplicationJSON struct {
    Data []shared.Firewall `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetLinodeFirewallsDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetLinodeFirewallsResponse struct {
    ContentType string 
    StatusCode int64 
    GetLinodeFirewalls200ApplicationJSONObject *GetLinodeFirewalls200ApplicationJSON 
    GetLinodeFirewallsDefaultApplicationJSONObject *GetLinodeFirewallsDefaultApplicationJSON 
    
}

