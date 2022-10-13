package shared

type FailureDetail struct {
	Crashed           *bool `json:"crashed"`
	DeviceOutOfMemory *bool `json:"deviceOutOfMemory"`
	FailedRoboscript  *bool `json:"failedRoboscript"`
	NotInstalled      *bool `json:"notInstalled"`
	OtherNativeCrash  *bool `json:"otherNativeCrash"`
	TimedOut          *bool `json:"timedOut"`
	UnableToCrawl     *bool `json:"unableToCrawl"`
}
