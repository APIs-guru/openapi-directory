package shared

type TranscodeSetting struct {
	EnabledVideoFormats []int32 `json:"enabledVideoFormats"`
	Kind                *string `json:"kind"`
}
