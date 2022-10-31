package operations



type GetOrganizationApplianceVpnStatusesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationApplianceVpnStatusesQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    NetworkIds []string `queryParam:"style=form,explode=false,name=networkIds"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    
}

type GetOrganizationApplianceVpnStatusesRequest struct {
    PathParams GetOrganizationApplianceVpnStatusesPathParams 
    QueryParams GetOrganizationApplianceVpnStatusesQueryParams 
    
}

type GetOrganizationApplianceVpnStatusesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetOrganizationApplianceVpnStatuses200ApplicationJSONObject map[string]interface{} 
    
}

