package shared

type AndroidRoboTest struct {
	AppInitialActivity   *string `json:"appInitialActivity"`
	BootstrapPackageID   *string `json:"bootstrapPackageId"`
	BootstrapRunnerClass *string `json:"bootstrapRunnerClass"`
	MaxDepth             *int32  `json:"maxDepth"`
	MaxSteps             *int32  `json:"maxSteps"`
}
