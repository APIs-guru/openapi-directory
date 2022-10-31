package shared

type ScreenshotPayloadConfigs struct {
	MacosMojave *Browsers `json:"macos mojave,omitempty"`
	Windows10   *Browsers `json:"windows 10,omitempty"`
}

type ScreenshotPayload struct {
	CallbackURL      *string                   `json:"callback_url,omitempty"`
	Configs          *ScreenshotPayloadConfigs `json:"configs,omitempty"`
	DeferTime        *float64                  `json:"defer_time,omitempty"`
	Email            *bool                     `json:"email,omitempty"`
	MacRes           *string                   `json:"mac_res,omitempty"`
	Password         *string                   `json:"password,omitempty"`
	Tunnel           *bool                     `json:"tunnel,omitempty"`
	TunnelIdentifier *string                   `json:"tunnel_identifier,omitempty"`
	URL              *string                   `json:"url,omitempty"`
	Username         *string                   `json:"username,omitempty"`
	WinRes           *string                   `json:"win_res,omitempty"`
}
