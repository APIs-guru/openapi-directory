package shared

type PresentationParamsColorSpaceEnum string

const (
	PresentationParamsColorSpaceEnumUnknown PresentationParamsColorSpaceEnum = "UNKNOWN"
	PresentationParamsColorSpaceEnumLinear  PresentationParamsColorSpaceEnum = "LINEAR"
	PresentationParamsColorSpaceEnumGamma   PresentationParamsColorSpaceEnum = "GAMMA"
)

type PresentationParams struct {
	BackgroundColor   *string                           `json:"backgroundColor"`
	ColorSpace        *PresentationParamsColorSpaceEnum `json:"colorSpace"`
	OrientingRotation *Quaternion                       `json:"orientingRotation"`
}
