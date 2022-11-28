package shared

// AndroidRoboTest
// A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.
type AndroidRoboTest struct {
	AppInitialActivity   *string `json:"appInitialActivity,omitempty"`
	BootstrapPackageID   *string `json:"bootstrapPackageId,omitempty"`
	BootstrapRunnerClass *string `json:"bootstrapRunnerClass,omitempty"`
	MaxDepth             *int32  `json:"maxDepth,omitempty"`
	MaxSteps             *int32  `json:"maxSteps,omitempty"`
}
