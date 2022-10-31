package operations



type GetOrganizationInventoryDevicesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}


type GetOrganizationInventoryDevicesUsedStateEnum string

const (
    GetOrganizationInventoryDevicesUsedStateEnumUsed GetOrganizationInventoryDevicesUsedStateEnum = "used"
GetOrganizationInventoryDevicesUsedStateEnumUnused GetOrganizationInventoryDevicesUsedStateEnum = "unused"
)


type GetOrganizationInventoryDevicesQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    UsedState *GetOrganizationInventoryDevicesUsedStateEnum `queryParam:"style=form,explode=true,name=usedState"`
    
}

type GetOrganizationInventoryDevicesRequest struct {
    PathParams GetOrganizationInventoryDevicesPathParams 
    QueryParams GetOrganizationInventoryDevicesQueryParams 
    
}

type GetOrganizationInventoryDevicesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetOrganizationInventoryDevices200ApplicationJSONObject map[string]interface{} 
    
}

