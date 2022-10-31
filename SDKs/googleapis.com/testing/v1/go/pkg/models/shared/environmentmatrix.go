package shared



type EnvironmentMatrix struct {
    AndroidDeviceList *AndroidDeviceList `json:"androidDeviceList,omitempty"`
    AndroidMatrix *AndroidMatrix `json:"androidMatrix,omitempty"`
    IosDeviceList *IosDeviceList `json:"iosDeviceList,omitempty"`
    
}

