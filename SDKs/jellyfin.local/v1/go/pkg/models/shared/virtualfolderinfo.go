package shared

type VirtualFolderInfo struct {
	CollectionType     *string         `json:"CollectionType"`
	ItemID             *string         `json:"ItemId"`
	LibraryOptions     *LibraryOptions `json:"LibraryOptions"`
	Locations          []string        `json:"Locations"`
	Name               *string         `json:"Name"`
	PrimaryImageItemID *string         `json:"PrimaryImageItemId"`
	RefreshProgress    *float64        `json:"RefreshProgress"`
	RefreshStatus      *string         `json:"RefreshStatus"`
}
