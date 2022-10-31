package operations

import (
"openapi/pkg/models/shared")

type ExtrasTagsListQueryParams struct {
    Color *string `queryParam:"style=form,explode=true,name=color"`
    ColorIc *string `queryParam:"style=form,explode=true,name=color__ic"`
    ColorIe *string `queryParam:"style=form,explode=true,name=color__ie"`
    ColorIew *string `queryParam:"style=form,explode=true,name=color__iew"`
    ColorIsw *string `queryParam:"style=form,explode=true,name=color__isw"`
    ColorN *string `queryParam:"style=form,explode=true,name=color__n"`
    ColorNic *string `queryParam:"style=form,explode=true,name=color__nic"`
    ColorNie *string `queryParam:"style=form,explode=true,name=color__nie"`
    ColorNiew *string `queryParam:"style=form,explode=true,name=color__niew"`
    ColorNisw *string `queryParam:"style=form,explode=true,name=color__nisw"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IDGt *string `queryParam:"style=form,explode=true,name=id__gt"`
    IDGte *string `queryParam:"style=form,explode=true,name=id__gte"`
    IDLt *string `queryParam:"style=form,explode=true,name=id__lt"`
    IDLte *string `queryParam:"style=form,explode=true,name=id__lte"`
    IDN *string `queryParam:"style=form,explode=true,name=id__n"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    NameIc *string `queryParam:"style=form,explode=true,name=name__ic"`
    NameIe *string `queryParam:"style=form,explode=true,name=name__ie"`
    NameIew *string `queryParam:"style=form,explode=true,name=name__iew"`
    NameIsw *string `queryParam:"style=form,explode=true,name=name__isw"`
    NameN *string `queryParam:"style=form,explode=true,name=name__n"`
    NameNic *string `queryParam:"style=form,explode=true,name=name__nic"`
    NameNie *string `queryParam:"style=form,explode=true,name=name__nie"`
    NameNiew *string `queryParam:"style=form,explode=true,name=name__niew"`
    NameNisw *string `queryParam:"style=form,explode=true,name=name__nisw"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Slug *string `queryParam:"style=form,explode=true,name=slug"`
    SlugIc *string `queryParam:"style=form,explode=true,name=slug__ic"`
    SlugIe *string `queryParam:"style=form,explode=true,name=slug__ie"`
    SlugIew *string `queryParam:"style=form,explode=true,name=slug__iew"`
    SlugIsw *string `queryParam:"style=form,explode=true,name=slug__isw"`
    SlugN *string `queryParam:"style=form,explode=true,name=slug__n"`
    SlugNic *string `queryParam:"style=form,explode=true,name=slug__nic"`
    SlugNie *string `queryParam:"style=form,explode=true,name=slug__nie"`
    SlugNiew *string `queryParam:"style=form,explode=true,name=slug__niew"`
    SlugNisw *string `queryParam:"style=form,explode=true,name=slug__nisw"`
    
}

type ExtrasTagsListRequest struct {
    QueryParams ExtrasTagsListQueryParams 
    
}

type ExtrasTagsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Tag `json:"results"`
    
}

type ExtrasTagsListResponse struct {
    ContentType string 
    StatusCode int64 
    ExtrasTagsList200ApplicationJSONObject *ExtrasTagsList200ApplicationJSON 
    
}

