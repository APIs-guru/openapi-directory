package shared

type HistoryTestPlatformEnum string

const (
	HistoryTestPlatformEnumUnknownPlatform HistoryTestPlatformEnum = "unknownPlatform"
	HistoryTestPlatformEnumAndroid         HistoryTestPlatformEnum = "android"
	HistoryTestPlatformEnumIos             HistoryTestPlatformEnum = "ios"
)

// History
// A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch.
type History struct {
	DisplayName  *string                  `json:"displayName,omitempty"`
	HistoryID    *string                  `json:"historyId,omitempty"`
	Name         *string                  `json:"name,omitempty"`
	TestPlatform *HistoryTestPlatformEnum `json:"testPlatform,omitempty"`
}
