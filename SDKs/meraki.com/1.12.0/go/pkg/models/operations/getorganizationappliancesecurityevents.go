package operations



type GetOrganizationApplianceSecurityEventsPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}


type GetOrganizationApplianceSecurityEventsSortOrderEnum string

const (
    GetOrganizationApplianceSecurityEventsSortOrderEnumAscending GetOrganizationApplianceSecurityEventsSortOrderEnum = "ascending"
GetOrganizationApplianceSecurityEventsSortOrderEnumDescending GetOrganizationApplianceSecurityEventsSortOrderEnum = "descending"
)


type GetOrganizationApplianceSecurityEventsQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    SortOrder *GetOrganizationApplianceSecurityEventsSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetOrganizationApplianceSecurityEventsRequest struct {
    PathParams GetOrganizationApplianceSecurityEventsPathParams 
    QueryParams GetOrganizationApplianceSecurityEventsQueryParams 
    
}

type GetOrganizationApplianceSecurityEventsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetOrganizationApplianceSecurityEvents200ApplicationJSONObject map[string]interface{} 
    
}

