package operations

import (
"openapi/pkg/models/shared")

type DcimPowerPortTemplatesListQueryParams struct {
    AllocatedDraw *string `queryParam:"style=form,explode=true,name=allocated_draw"`
    AllocatedDrawGt *string `queryParam:"style=form,explode=true,name=allocated_draw__gt"`
    AllocatedDrawGte *string `queryParam:"style=form,explode=true,name=allocated_draw__gte"`
    AllocatedDrawLt *string `queryParam:"style=form,explode=true,name=allocated_draw__lt"`
    AllocatedDrawLte *string `queryParam:"style=form,explode=true,name=allocated_draw__lte"`
    AllocatedDrawN *string `queryParam:"style=form,explode=true,name=allocated_draw__n"`
    DevicetypeID *string `queryParam:"style=form,explode=true,name=devicetype_id"`
    DevicetypeIDN *string `queryParam:"style=form,explode=true,name=devicetype_id__n"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IDGt *string `queryParam:"style=form,explode=true,name=id__gt"`
    IDGte *string `queryParam:"style=form,explode=true,name=id__gte"`
    IDLt *string `queryParam:"style=form,explode=true,name=id__lt"`
    IDLte *string `queryParam:"style=form,explode=true,name=id__lte"`
    IDN *string `queryParam:"style=form,explode=true,name=id__n"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    MaximumDraw *string `queryParam:"style=form,explode=true,name=maximum_draw"`
    MaximumDrawGt *string `queryParam:"style=form,explode=true,name=maximum_draw__gt"`
    MaximumDrawGte *string `queryParam:"style=form,explode=true,name=maximum_draw__gte"`
    MaximumDrawLt *string `queryParam:"style=form,explode=true,name=maximum_draw__lt"`
    MaximumDrawLte *string `queryParam:"style=form,explode=true,name=maximum_draw__lte"`
    MaximumDrawN *string `queryParam:"style=form,explode=true,name=maximum_draw__n"`
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
    Type *string `queryParam:"style=form,explode=true,name=type"`
    TypeN *string `queryParam:"style=form,explode=true,name=type__n"`
    
}

type DcimPowerPortTemplatesListRequest struct {
    QueryParams DcimPowerPortTemplatesListQueryParams 
    
}

type DcimPowerPortTemplatesList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.PowerPortTemplate `json:"results"`
    
}

type DcimPowerPortTemplatesListResponse struct {
    ContentType string 
    StatusCode int64 
    DcimPowerPortTemplatesList200ApplicationJSONObject *DcimPowerPortTemplatesList200ApplicationJSON 
    
}

