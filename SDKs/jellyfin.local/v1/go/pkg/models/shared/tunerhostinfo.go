package shared

type TunerHostInfo struct {
	AllowHwTranscoding  *bool   `json:"AllowHWTranscoding,omitempty"`
	DeviceID            *string `json:"DeviceId,omitempty"`
	EnableStreamLooping *bool   `json:"EnableStreamLooping,omitempty"`
	FriendlyName        *string `json:"FriendlyName,omitempty"`
	ID                  *string `json:"Id,omitempty"`
	ImportFavoritesOnly *bool   `json:"ImportFavoritesOnly,omitempty"`
	Source              *string `json:"Source,omitempty"`
	TunerCount          *int32  `json:"TunerCount,omitempty"`
	Type                *string `json:"Type,omitempty"`
	URL                 *string `json:"Url,omitempty"`
	UserAgent           *string `json:"UserAgent,omitempty"`
}
