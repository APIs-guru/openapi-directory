package operations

import (
"openapi/pkg/models/shared")

type DcimInventoryItemsListQueryParams struct {
    AssetTag *string `queryParam:"style=form,explode=true,name=asset_tag"`
    Device *string `queryParam:"style=form,explode=true,name=device"`
    DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
    Discovered *string `queryParam:"style=form,explode=true,name=discovered"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Manufacturer *string `queryParam:"style=form,explode=true,name=manufacturer"`
    ManufacturerID *string `queryParam:"style=form,explode=true,name=manufacturer_id"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    ParentID *string `queryParam:"style=form,explode=true,name=parent_id"`
    PartID *string `queryParam:"style=form,explode=true,name=part_id"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Serial *string `queryParam:"style=form,explode=true,name=serial"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    
}

type DcimInventoryItemsListRequest struct {
    QueryParams DcimInventoryItemsListQueryParams 
    
}

type DcimInventoryItemsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.InventoryItem `json:"results"`
    
}

type DcimInventoryItemsListResponse struct {
    ContentType string 
    StatusCode int64 
    DcimInventoryItemsList200ApplicationJSONObject *DcimInventoryItemsList200ApplicationJSON 
    
}

