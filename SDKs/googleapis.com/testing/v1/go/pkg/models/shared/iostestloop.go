package shared

type IosTestLoop struct {
	AppBundleID *string        `json:"appBundleId,omitempty"`
	AppIpa      *FileReference `json:"appIpa,omitempty"`
	Scenarios   []int32        `json:"scenarios,omitempty"`
}
