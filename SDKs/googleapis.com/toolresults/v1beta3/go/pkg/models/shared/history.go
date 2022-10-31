package shared

type HistoryTestPlatformEnum string

const (
	HistoryTestPlatformEnumUnknownPlatform HistoryTestPlatformEnum = "unknownPlatform"
	HistoryTestPlatformEnumAndroid         HistoryTestPlatformEnum = "android"
	HistoryTestPlatformEnumIos             HistoryTestPlatformEnum = "ios"
)

type History struct {
	DisplayName  *string                  `json:"displayName,omitempty"`
	HistoryID    *string                  `json:"historyId,omitempty"`
	Name         *string                  `json:"name,omitempty"`
	TestPlatform *HistoryTestPlatformEnum `json:"testPlatform,omitempty"`
}
