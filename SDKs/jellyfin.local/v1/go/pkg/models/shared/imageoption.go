package shared

type ImageOption struct {
	Limit    *int32         `json:"Limit"`
	MinWidth *int32         `json:"MinWidth"`
	Type     *ImageTypeEnum `json:"Type"`
}
