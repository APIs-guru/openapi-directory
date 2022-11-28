package shared

// TestSpecification
// A description of how to run the test.
type TestSpecification struct {
	AndroidInstrumentationTest *AndroidInstrumentationTest `json:"androidInstrumentationTest,omitempty"`
	AndroidRoboTest            *AndroidRoboTest            `json:"androidRoboTest,omitempty"`
	AndroidTestLoop            *AndroidTestLoop            `json:"androidTestLoop,omitempty"`
	DisablePerformanceMetrics  *bool                       `json:"disablePerformanceMetrics,omitempty"`
	DisableVideoRecording      *bool                       `json:"disableVideoRecording,omitempty"`
	IosTestLoop                *IosTestLoop                `json:"iosTestLoop,omitempty"`
	IosTestSetup               *IosTestSetup               `json:"iosTestSetup,omitempty"`
	IosXcTest                  *IosXcTest                  `json:"iosXcTest,omitempty"`
	TestSetup                  *TestSetup                  `json:"testSetup,omitempty"`
	TestTimeout                *string                     `json:"testTimeout,omitempty"`
}
