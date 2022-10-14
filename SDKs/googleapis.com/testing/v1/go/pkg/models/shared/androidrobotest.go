package shared

type AndroidRoboTestRoboModeEnum string

const (
	AndroidRoboTestRoboModeEnumRoboModeUnspecified AndroidRoboTestRoboModeEnum = "ROBO_MODE_UNSPECIFIED"
	AndroidRoboTestRoboModeEnumRoboVersion1        AndroidRoboTestRoboModeEnum = "ROBO_VERSION_1"
	AndroidRoboTestRoboModeEnumRoboVersion2        AndroidRoboTestRoboModeEnum = "ROBO_VERSION_2"
)

type AndroidRoboTest struct {
	AppApk             *FileReference               `json:"appApk,omitempty"`
	AppBundle          *AppBundle                   `json:"appBundle,omitempty"`
	AppInitialActivity *string                      `json:"appInitialActivity,omitempty"`
	AppPackageID       *string                      `json:"appPackageId,omitempty"`
	MaxDepth           *int32                       `json:"maxDepth,omitempty"`
	MaxSteps           *int32                       `json:"maxSteps,omitempty"`
	RoboDirectives     []RoboDirective              `json:"roboDirectives,omitempty"`
	RoboMode           *AndroidRoboTestRoboModeEnum `json:"roboMode,omitempty"`
	RoboScript         *FileReference               `json:"roboScript,omitempty"`
	StartingIntents    []RoboStartingIntent         `json:"startingIntents,omitempty"`
}
