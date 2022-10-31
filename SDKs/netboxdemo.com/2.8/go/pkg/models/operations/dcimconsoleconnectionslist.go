package operations

import (
"openapi/pkg/models/shared")

type DcimConsoleConnectionsListQueryParams struct {
    ConnectionStatus *string `queryParam:"style=form,explode=true,name=connection_status"`
    ConnectionStatusN *string `queryParam:"style=form,explode=true,name=connection_status__n"`
    Device *string `queryParam:"style=form,explode=true,name=device"`
    DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
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
    Site *string `queryParam:"style=form,explode=true,name=site"`
    
}

type DcimConsoleConnectionsListRequest struct {
    QueryParams DcimConsoleConnectionsListQueryParams 
    
}

type DcimConsoleConnectionsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.ConsolePort `json:"results"`
    
}

type DcimConsoleConnectionsListResponse struct {
    ContentType string 
    StatusCode int64 
    DcimConsoleConnectionsList200ApplicationJSONObject *DcimConsoleConnectionsList200ApplicationJSON 
    
}

