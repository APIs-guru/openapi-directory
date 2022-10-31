package shared




type ListAssetsResultStateEnum string

const (
    ListAssetsResultStateEnumStateUnspecified ListAssetsResultStateEnum = "STATE_UNSPECIFIED"
ListAssetsResultStateEnumUnused ListAssetsResultStateEnum = "UNUSED"
ListAssetsResultStateEnumAdded ListAssetsResultStateEnum = "ADDED"
ListAssetsResultStateEnumRemoved ListAssetsResultStateEnum = "REMOVED"
ListAssetsResultStateEnumActive ListAssetsResultStateEnum = "ACTIVE"
)


type ListAssetsResult struct {
    Asset *Asset `json:"asset,omitempty"`
    State *ListAssetsResultStateEnum `json:"state,omitempty"`
    
}

