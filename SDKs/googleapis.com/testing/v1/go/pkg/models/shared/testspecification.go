package shared

type TestSpecification struct {
	AndroidInstrumentationTest *AndroidInstrumentationTest `json:"androidInstrumentationTest"`
	AndroidRoboTest            *AndroidRoboTest            `json:"androidRoboTest"`
	AndroidTestLoop            *AndroidTestLoop            `json:"androidTestLoop"`
	DisablePerformanceMetrics  *bool                       `json:"disablePerformanceMetrics"`
	DisableVideoRecording      *bool                       `json:"disableVideoRecording"`
	IosTestLoop                *IosTestLoop                `json:"iosTestLoop"`
	IosTestSetup               *IosTestSetup               `json:"iosTestSetup"`
	IosXcTest                  *IosXcTest                  `json:"iosXcTest"`
	TestSetup                  *TestSetup                  `json:"testSetup"`
	TestTimeout                *string                     `json:"testTimeout"`
}
