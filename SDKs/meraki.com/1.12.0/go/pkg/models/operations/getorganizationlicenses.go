package operations



type GetOrganizationLicensesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}


type GetOrganizationLicensesStateEnum string

const (
    GetOrganizationLicensesStateEnumActive GetOrganizationLicensesStateEnum = "active"
GetOrganizationLicensesStateEnumExpired GetOrganizationLicensesStateEnum = "expired"
GetOrganizationLicensesStateEnumExpiring GetOrganizationLicensesStateEnum = "expiring"
GetOrganizationLicensesStateEnumUnused GetOrganizationLicensesStateEnum = "unused"
GetOrganizationLicensesStateEnumUnusedActive GetOrganizationLicensesStateEnum = "unusedActive"
GetOrganizationLicensesStateEnumRecentlyQueued GetOrganizationLicensesStateEnum = "recentlyQueued"
)


type GetOrganizationLicensesQueryParams struct {
    DeviceSerial *string `queryParam:"style=form,explode=true,name=deviceSerial"`
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    NetworkID *string `queryParam:"style=form,explode=true,name=networkId"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    State *GetOrganizationLicensesStateEnum `queryParam:"style=form,explode=true,name=state"`
    
}

type GetOrganizationLicensesRequest struct {
    PathParams GetOrganizationLicensesPathParams 
    QueryParams GetOrganizationLicensesQueryParams 
    
}

type GetOrganizationLicensesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetOrganizationLicenses200ApplicationJSONObject map[string]interface{} 
    
}

