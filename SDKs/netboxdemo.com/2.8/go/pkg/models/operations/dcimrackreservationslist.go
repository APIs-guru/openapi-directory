package operations

import (
"openapi/pkg/models/shared")

type DcimRackReservationsListQueryParams struct {
    Created *string `queryParam:"style=form,explode=true,name=created"`
    CreatedGt *string `queryParam:"style=form,explode=true,name=created__gt"`
    CreatedGte *string `queryParam:"style=form,explode=true,name=created__gte"`
    CreatedLt *string `queryParam:"style=form,explode=true,name=created__lt"`
    CreatedLte *string `queryParam:"style=form,explode=true,name=created__lte"`
    CreatedN *string `queryParam:"style=form,explode=true,name=created__n"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    GroupN *string `queryParam:"style=form,explode=true,name=group__n"`
    GroupID *string `queryParam:"style=form,explode=true,name=group_id"`
    GroupIDN *string `queryParam:"style=form,explode=true,name=group_id__n"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IDGt *string `queryParam:"style=form,explode=true,name=id__gt"`
    IDGte *string `queryParam:"style=form,explode=true,name=id__gte"`
    IDLt *string `queryParam:"style=form,explode=true,name=id__lt"`
    IDLte *string `queryParam:"style=form,explode=true,name=id__lte"`
    IDN *string `queryParam:"style=form,explode=true,name=id__n"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    RackID *string `queryParam:"style=form,explode=true,name=rack_id"`
    RackIDN *string `queryParam:"style=form,explode=true,name=rack_id__n"`
    Site *string `queryParam:"style=form,explode=true,name=site"`
    SiteN *string `queryParam:"style=form,explode=true,name=site__n"`
    SiteID *string `queryParam:"style=form,explode=true,name=site_id"`
    SiteIDN *string `queryParam:"style=form,explode=true,name=site_id__n"`
    Tenant *string `queryParam:"style=form,explode=true,name=tenant"`
    TenantN *string `queryParam:"style=form,explode=true,name=tenant__n"`
    TenantGroup *string `queryParam:"style=form,explode=true,name=tenant_group"`
    TenantGroupN *string `queryParam:"style=form,explode=true,name=tenant_group__n"`
    TenantGroupID *string `queryParam:"style=form,explode=true,name=tenant_group_id"`
    TenantGroupIDN *string `queryParam:"style=form,explode=true,name=tenant_group_id__n"`
    TenantID *string `queryParam:"style=form,explode=true,name=tenant_id"`
    TenantIDN *string `queryParam:"style=form,explode=true,name=tenant_id__n"`
    User *string `queryParam:"style=form,explode=true,name=user"`
    UserN *string `queryParam:"style=form,explode=true,name=user__n"`
    UserID *string `queryParam:"style=form,explode=true,name=user_id"`
    UserIDN *string `queryParam:"style=form,explode=true,name=user_id__n"`
    
}

type DcimRackReservationsListRequest struct {
    QueryParams DcimRackReservationsListQueryParams 
    
}

type DcimRackReservationsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.RackReservation `json:"results"`
    
}

type DcimRackReservationsListResponse struct {
    ContentType string 
    StatusCode int64 
    DcimRackReservationsList200ApplicationJSONObject *DcimRackReservationsList200ApplicationJSON 
    
}

