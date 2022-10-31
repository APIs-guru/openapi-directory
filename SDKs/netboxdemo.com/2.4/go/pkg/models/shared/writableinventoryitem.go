package shared



type WritableInventoryItem struct {
    AssetTag *string `json:"asset_tag,omitempty"`
    Description *string `json:"description,omitempty"`
    Device int64 `json:"device"`
    Discovered *bool `json:"discovered,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Manufacturer *int64 `json:"manufacturer,omitempty"`
    Name string `json:"name"`
    Parent *int64 `json:"parent,omitempty"`
    PartID *string `json:"part_id,omitempty"`
    Serial *string `json:"serial,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

