package shared

type DeviceInfo struct {
	HwVersion    *string `json:"hwVersion"`
	Manufacturer *string `json:"manufacturer"`
	Model        *string `json:"model"`
	SwVersion    *string `json:"swVersion"`
}
