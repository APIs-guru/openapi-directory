package operations

import (
"openapi/pkg/models/shared")

type DcimDeviceBayTemplatesListQueryParams struct {
    DevicetypeID *string `queryParam:"style=form,explode=true,name=devicetype_id"`
    DevicetypeIDN *string `queryParam:"style=form,explode=true,name=devicetype_id__n"`
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
    
}

type DcimDeviceBayTemplatesListRequest struct {
    QueryParams DcimDeviceBayTemplatesListQueryParams 
    
}

type DcimDeviceBayTemplatesList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.DeviceBayTemplate `json:"results"`
    
}

type DcimDeviceBayTemplatesListResponse struct {
    ContentType string 
    StatusCode int64 
    DcimDeviceBayTemplatesList200ApplicationJSONObject *DcimDeviceBayTemplatesList200ApplicationJSON 
    
}

