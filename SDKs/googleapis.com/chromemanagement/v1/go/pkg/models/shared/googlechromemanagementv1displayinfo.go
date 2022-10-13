package shared

type GoogleChromeManagementV1DisplayInfo struct {
	DeviceID         *string `json:"deviceId"`
	IsInternal       *bool   `json:"isInternal"`
	RefreshRate      *int32  `json:"refreshRate"`
	ResolutionHeight *int32  `json:"resolutionHeight"`
	ResolutionWidth  *int32  `json:"resolutionWidth"`
}
