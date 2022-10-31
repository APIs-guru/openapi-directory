package operations



type GetOrganizationApplianceUplinkStatusesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationApplianceUplinkStatusesQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    Iccids []string `queryParam:"style=form,explode=false,name=iccids"`
    NetworkIds []string `queryParam:"style=form,explode=false,name=networkIds"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    Serials []string `queryParam:"style=form,explode=false,name=serials"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    
}

type GetOrganizationApplianceUplinkStatusesRequest struct {
    PathParams GetOrganizationApplianceUplinkStatusesPathParams 
    QueryParams GetOrganizationApplianceUplinkStatusesQueryParams 
    
}

type GetOrganizationApplianceUplinkStatusesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetOrganizationApplianceUplinkStatuses200ApplicationJSONObject map[string]interface{} 
    
}

