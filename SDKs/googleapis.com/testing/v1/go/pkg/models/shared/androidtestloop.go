package shared

type AndroidTestLoop struct {
	AppApk         *FileReference `json:"appApk"`
	AppBundle      *AppBundle     `json:"appBundle"`
	AppPackageID   *string        `json:"appPackageId"`
	ScenarioLabels []string       `json:"scenarioLabels"`
	Scenarios      []int32        `json:"scenarios"`
}
