package operations



type GetOrganizationDevicesStatusesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationDevicesStatusesQueryParams struct {
    Components map[string]interface{} `queryParam:"style=form,explode=true,name=components"`
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    
}

type GetOrganizationDevicesStatusesRequest struct {
    PathParams GetOrganizationDevicesStatusesPathParams 
    QueryParams GetOrganizationDevicesStatusesQueryParams 
    
}

type GetOrganizationDevicesStatusesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetOrganizationDevicesStatuses200ApplicationJSONObject map[string]interface{} 
    
}

