package operations

import (
"openapi/pkg/models/shared")

type DcimRackReservationsListQueryParams struct {
    Created *string `queryParam:"style=form,explode=true,name=created"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    GroupID *string `queryParam:"style=form,explode=true,name=group_id"`
    IDIn *string `queryParam:"style=form,explode=true,name=id__in"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    RackID *string `queryParam:"style=form,explode=true,name=rack_id"`
    Site *string `queryParam:"style=form,explode=true,name=site"`
    SiteID *string `queryParam:"style=form,explode=true,name=site_id"`
    Tenant *string `queryParam:"style=form,explode=true,name=tenant"`
    TenantID *string `queryParam:"style=form,explode=true,name=tenant_id"`
    User *string `queryParam:"style=form,explode=true,name=user"`
    UserID *string `queryParam:"style=form,explode=true,name=user_id"`
    
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

