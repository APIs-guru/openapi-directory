package shared



type ListInventorySourcesResponse struct {
    InventorySources []InventorySource `json:"inventorySources,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

