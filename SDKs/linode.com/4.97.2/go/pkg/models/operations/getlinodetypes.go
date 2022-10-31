package operations

import (
"openapi/pkg/models/shared")

type GetLinodeTypes200ApplicationJSON struct {
    Data []shared.LinodeType `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetLinodeTypesDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetLinodeTypesResponse struct {
    ContentType string 
    StatusCode int64 
    GetLinodeTypes200ApplicationJSONObject *GetLinodeTypes200ApplicationJSON 
    GetLinodeTypesDefaultApplicationJSONObject *GetLinodeTypesDefaultApplicationJSON 
    
}

