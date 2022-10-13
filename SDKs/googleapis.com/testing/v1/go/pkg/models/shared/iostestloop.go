package shared

type IosTestLoop struct {
	AppBundleID *string        `json:"appBundleId"`
	AppIpa      *FileReference `json:"appIpa"`
	Scenarios   []int32        `json:"scenarios"`
}
