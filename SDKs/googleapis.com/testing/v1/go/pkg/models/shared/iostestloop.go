package shared

// IosTestLoop
// A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.
type IosTestLoop struct {
	AppBundleID *string        `json:"appBundleId,omitempty"`
	AppIpa      *FileReference `json:"appIpa,omitempty"`
	Scenarios   []int32        `json:"scenarios,omitempty"`
}
