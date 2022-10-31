package shared



type InventoryItem struct {
    AssetTag *string `json:"asset_tag,omitempty"`
    Description *string `json:"description,omitempty"`
    Device NestedDevice `json:"device"`
    Discovered *bool `json:"discovered,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Manufacturer *NestedManufacturer `json:"manufacturer,omitempty"`
    Name string `json:"name"`
    Parent *int64 `json:"parent,omitempty"`
    PartID *string `json:"part_id,omitempty"`
    Serial *string `json:"serial,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

