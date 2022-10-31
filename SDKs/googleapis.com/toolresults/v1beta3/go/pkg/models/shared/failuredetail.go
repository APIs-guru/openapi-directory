package shared



type FailureDetail struct {
    Crashed *bool `json:"crashed,omitempty"`
    DeviceOutOfMemory *bool `json:"deviceOutOfMemory,omitempty"`
    FailedRoboscript *bool `json:"failedRoboscript,omitempty"`
    NotInstalled *bool `json:"notInstalled,omitempty"`
    OtherNativeCrash *bool `json:"otherNativeCrash,omitempty"`
    TimedOut *bool `json:"timedOut,omitempty"`
    UnableToCrawl *bool `json:"unableToCrawl,omitempty"`
    
}

