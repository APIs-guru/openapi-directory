package shared

// AndroidTestLoop
// A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
type AndroidTestLoop struct {
	AppApk         *FileReference `json:"appApk,omitempty"`
	AppBundle      *AppBundle     `json:"appBundle,omitempty"`
	AppPackageID   *string        `json:"appPackageId,omitempty"`
	ScenarioLabels []string       `json:"scenarioLabels,omitempty"`
	Scenarios      []int32        `json:"scenarios,omitempty"`
}
