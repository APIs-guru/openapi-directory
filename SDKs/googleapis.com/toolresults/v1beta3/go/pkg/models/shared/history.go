package shared

type HistoryTestPlatformEnum string

const (
	HistoryTestPlatformEnumUnknownPlatform HistoryTestPlatformEnum = "unknownPlatform"
	HistoryTestPlatformEnumAndroid         HistoryTestPlatformEnum = "android"
	HistoryTestPlatformEnumIos             HistoryTestPlatformEnum = "ios"
)

type History struct {
	DisplayName  *string                  `json:"displayName"`
	HistoryID    *string                  `json:"historyId"`
	Name         *string                  `json:"name"`
	TestPlatform *HistoryTestPlatformEnum `json:"testPlatform"`
}
