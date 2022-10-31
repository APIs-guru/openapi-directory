package shared



type AndroidTestLoop struct {
    AppApk *FileReference `json:"appApk,omitempty"`
    AppBundle *AppBundle `json:"appBundle,omitempty"`
    AppPackageID *string `json:"appPackageId,omitempty"`
    ScenarioLabels []string `json:"scenarioLabels,omitempty"`
    Scenarios []int32 `json:"scenarios,omitempty"`
    
}

