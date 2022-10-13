package shared

type SiteTranscodeSetting struct {
	EnabledVideoFormats []int32 `json:"enabledVideoFormats"`
	Kind                *string `json:"kind"`
}
