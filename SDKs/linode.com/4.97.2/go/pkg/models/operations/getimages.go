package operations

import (
"openapi/pkg/models/shared")

type GetImagesQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetImagesRequest struct {
    QueryParams GetImagesQueryParams 
    
}

type GetImages200ApplicationJSON struct {
    Data []shared.ImagePublic `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetImagesDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetImagesResponse struct {
    ContentType string 
    StatusCode int64 
    GetImages200ApplicationJSONObject *GetImages200ApplicationJSON 
    GetImagesDefaultApplicationJSONObject *GetImagesDefaultApplicationJSON 
    
}

