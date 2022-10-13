package shared

type TunerHostInfo struct {
	AllowHwTranscoding  *bool   `json:"AllowHWTranscoding"`
	DeviceID            *string `json:"DeviceId"`
	EnableStreamLooping *bool   `json:"EnableStreamLooping"`
	FriendlyName        *string `json:"FriendlyName"`
	ID                  *string `json:"Id"`
	ImportFavoritesOnly *bool   `json:"ImportFavoritesOnly"`
	Source              *string `json:"Source"`
	TunerCount          *int32  `json:"TunerCount"`
	Type                *string `json:"Type"`
	URL                 *string `json:"Url"`
	UserAgent           *string `json:"UserAgent"`
}
