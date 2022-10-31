package operations

import (
"openapi/pkg/models/shared")

type GetTagsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetTagsSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetTagsSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetTagsSecurity struct {
    Option1 *GetTagsSecurityOption1 `security:"option"`
    Option2 *GetTagsSecurityOption2 `security:"option"`
    
}

type GetTagsRequest struct {
    QueryParams GetTagsQueryParams 
    Security GetTagsSecurity 
    
}

type GetTags200ApplicationJSON struct {
    Data []shared.Tag `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetTagsDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetTagsResponse struct {
    ContentType string 
    StatusCode int64 
    GetTags200ApplicationJSONObject *GetTags200ApplicationJSON 
    GetTagsDefaultApplicationJSONObject *GetTagsDefaultApplicationJSON 
    
}

