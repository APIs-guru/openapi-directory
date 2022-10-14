package shared

type SiteTranscodeSetting struct {
	EnabledVideoFormats []int32 `json:"enabledVideoFormats,omitempty"`
	Kind                *string `json:"kind,omitempty"`
}
