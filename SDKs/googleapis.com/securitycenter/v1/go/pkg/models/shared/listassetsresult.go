package shared

type ListAssetsResultStateChangeEnum string

const (
	ListAssetsResultStateChangeEnumUnused  ListAssetsResultStateChangeEnum = "UNUSED"
	ListAssetsResultStateChangeEnumAdded   ListAssetsResultStateChangeEnum = "ADDED"
	ListAssetsResultStateChangeEnumRemoved ListAssetsResultStateChangeEnum = "REMOVED"
	ListAssetsResultStateChangeEnumActive  ListAssetsResultStateChangeEnum = "ACTIVE"
)

type ListAssetsResult struct {
	Asset       *Asset                           `json:"asset"`
	StateChange *ListAssetsResultStateChangeEnum `json:"stateChange"`
}
