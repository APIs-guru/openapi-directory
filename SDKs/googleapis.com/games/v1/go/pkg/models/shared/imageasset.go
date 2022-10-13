package shared

type ImageAsset struct {
	Height *int32  `json:"height"`
	Kind   *string `json:"kind"`
	Name   *string `json:"name"`
	URL    *string `json:"url"`
	Width  *int32  `json:"width"`
}
