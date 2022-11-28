package shared

// LiveTvServiceInfo
// Class ServiceInfo.
type LiveTvServiceInfo struct {
	HasUpdateAvailable *bool                    `json:"HasUpdateAvailable,omitempty"`
	HomePageURL        *string                  `json:"HomePageUrl,omitempty"`
	IsVisible          *bool                    `json:"IsVisible,omitempty"`
	Name               *string                  `json:"Name,omitempty"`
	Status             *LiveTvServiceStatusEnum `json:"Status,omitempty"`
	StatusMessage      *string                  `json:"StatusMessage,omitempty"`
	Tuners             []string                 `json:"Tuners,omitempty"`
	Version            *string                  `json:"Version,omitempty"`
}
