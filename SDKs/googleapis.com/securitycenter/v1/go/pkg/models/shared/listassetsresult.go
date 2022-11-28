package shared

type ListAssetsResultStateChangeEnum string

const (
	ListAssetsResultStateChangeEnumUnused  ListAssetsResultStateChangeEnum = "UNUSED"
	ListAssetsResultStateChangeEnumAdded   ListAssetsResultStateChangeEnum = "ADDED"
	ListAssetsResultStateChangeEnumRemoved ListAssetsResultStateChangeEnum = "REMOVED"
	ListAssetsResultStateChangeEnumActive  ListAssetsResultStateChangeEnum = "ACTIVE"
)

// ListAssetsResult
// Result containing the Asset and its State.
type ListAssetsResult struct {
	Asset       *Asset                           `json:"asset,omitempty"`
	StateChange *ListAssetsResultStateChangeEnum `json:"stateChange,omitempty"`
}
