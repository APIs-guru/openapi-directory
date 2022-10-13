package shared

type LiveTvServiceInfo struct {
	HasUpdateAvailable *bool                    `json:"HasUpdateAvailable"`
	HomePageURL        *string                  `json:"HomePageUrl"`
	IsVisible          *bool                    `json:"IsVisible"`
	Name               *string                  `json:"Name"`
	Status             *LiveTvServiceStatusEnum `json:"Status"`
	StatusMessage      *string                  `json:"StatusMessage"`
	Tuners             []string                 `json:"Tuners"`
	Version            *string                  `json:"Version"`
}
