package shared

type ScreenshotPayloadConfigs struct {
	MacosMojave *Browsers `json:"macos mojave"`
	Windows10   *Browsers `json:"windows 10"`
}

type ScreenshotPayload struct {
	CallbackURL      *string                   `json:"callback_url"`
	Configs          *ScreenshotPayloadConfigs `json:"configs"`
	DeferTime        *float64                  `json:"defer_time"`
	Email            *bool                     `json:"email"`
	MacRes           *string                   `json:"mac_res"`
	Password         *string                   `json:"password"`
	Tunnel           *bool                     `json:"tunnel"`
	TunnelIdentifier *string                   `json:"tunnel_identifier"`
	URL              *string                   `json:"url"`
	Username         *string                   `json:"username"`
	WinRes           *string                   `json:"win_res"`
}
