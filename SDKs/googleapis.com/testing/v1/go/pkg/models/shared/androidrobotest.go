package shared

type AndroidRoboTestRoboModeEnum string

const (
	AndroidRoboTestRoboModeEnumRoboModeUnspecified AndroidRoboTestRoboModeEnum = "ROBO_MODE_UNSPECIFIED"
	AndroidRoboTestRoboModeEnumRoboVersion1        AndroidRoboTestRoboModeEnum = "ROBO_VERSION_1"
	AndroidRoboTestRoboModeEnumRoboVersion2        AndroidRoboTestRoboModeEnum = "ROBO_VERSION_2"
)

type AndroidRoboTest struct {
	AppApk             *FileReference               `json:"appApk"`
	AppBundle          *AppBundle                   `json:"appBundle"`
	AppInitialActivity *string                      `json:"appInitialActivity"`
	AppPackageID       *string                      `json:"appPackageId"`
	MaxDepth           *int32                       `json:"maxDepth"`
	MaxSteps           *int32                       `json:"maxSteps"`
	RoboDirectives     []RoboDirective              `json:"roboDirectives"`
	RoboMode           *AndroidRoboTestRoboModeEnum `json:"roboMode"`
	RoboScript         *FileReference               `json:"roboScript"`
	StartingIntents    []RoboStartingIntent         `json:"startingIntents"`
}
