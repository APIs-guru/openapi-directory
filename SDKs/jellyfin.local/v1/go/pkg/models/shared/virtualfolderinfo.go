package shared



type VirtualFolderInfo struct {
    CollectionType *string `json:"CollectionType,omitempty"`
    ItemID *string `json:"ItemId,omitempty"`
    LibraryOptions *LibraryOptions `json:"LibraryOptions,omitempty"`
    Locations []string `json:"Locations,omitempty"`
    Name *string `json:"Name,omitempty"`
    PrimaryImageItemID *string `json:"PrimaryImageItemId,omitempty"`
    RefreshProgress *float64 `json:"RefreshProgress,omitempty"`
    RefreshStatus *string `json:"RefreshStatus,omitempty"`
    
}

