package shared

// GoogleChromeManagementV1DisplayInfo
// Information for a display.
type GoogleChromeManagementV1DisplayInfo struct {
	DeviceID         *string `json:"deviceId,omitempty"`
	IsInternal       *bool   `json:"isInternal,omitempty"`
	RefreshRate      *int32  `json:"refreshRate,omitempty"`
	ResolutionHeight *int32  `json:"resolutionHeight,omitempty"`
	ResolutionWidth  *int32  `json:"resolutionWidth,omitempty"`
}
