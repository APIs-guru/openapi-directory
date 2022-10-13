package shared

type EnvironmentMatrix struct {
	AndroidDeviceList *AndroidDeviceList `json:"androidDeviceList"`
	AndroidMatrix     *AndroidMatrix     `json:"androidMatrix"`
	IosDeviceList     *IosDeviceList     `json:"iosDeviceList"`
}
