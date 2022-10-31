package operations



type GetOrganizationCellularGatewayUplinkStatusesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationCellularGatewayUplinkStatusesQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    Iccids []string `queryParam:"style=form,explode=false,name=iccids"`
    NetworkIds []string `queryParam:"style=form,explode=false,name=networkIds"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    Serials []string `queryParam:"style=form,explode=false,name=serials"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    
}

type GetOrganizationCellularGatewayUplinkStatusesRequest struct {
    PathParams GetOrganizationCellularGatewayUplinkStatusesPathParams 
    QueryParams GetOrganizationCellularGatewayUplinkStatusesQueryParams 
    
}

type GetOrganizationCellularGatewayUplinkStatusesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObject map[string]interface{} 
    
}

