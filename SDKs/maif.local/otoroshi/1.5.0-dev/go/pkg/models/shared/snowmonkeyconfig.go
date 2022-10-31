package shared



type SnowMonkeyConfig struct {
    ChaosConfig ChaosConfig `json:"chaosConfig"`
    DryRun bool `json:"dryRun"`
    Enabled bool `json:"enabled"`
    IncludeUserFacingDescriptors bool `json:"includeUserFacingDescriptors"`
    OutageDurationFrom int32 `json:"outageDurationFrom"`
    OutageDurationTo int32 `json:"outageDurationTo"`
    OutageStrategy OutageStrategyEnum `json:"outageStrategy"`
    StartTime string `json:"startTime"`
    StopTime string `json:"stopTime"`
    TargetGroups []string `json:"targetGroups"`
    TimesPerDay int32 `json:"timesPerDay"`
    
}

