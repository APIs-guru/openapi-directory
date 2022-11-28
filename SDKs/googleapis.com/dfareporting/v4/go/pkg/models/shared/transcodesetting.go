package shared

// TranscodeSetting
// Transcode Settings
type TranscodeSetting struct {
	EnabledVideoFormats []int32 `json:"enabledVideoFormats,omitempty"`
	Kind                *string `json:"kind,omitempty"`
}
