package shared



type AndroidRoboTest struct {
    AppInitialActivity *string `json:"appInitialActivity,omitempty"`
    BootstrapPackageID *string `json:"bootstrapPackageId,omitempty"`
    BootstrapRunnerClass *string `json:"bootstrapRunnerClass,omitempty"`
    MaxDepth *int32 `json:"maxDepth,omitempty"`
    MaxSteps *int32 `json:"maxSteps,omitempty"`
    
}

