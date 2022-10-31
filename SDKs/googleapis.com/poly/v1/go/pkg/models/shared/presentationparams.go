package shared

type PresentationParamsColorSpaceEnum string

const (
	PresentationParamsColorSpaceEnumUnknown PresentationParamsColorSpaceEnum = "UNKNOWN"
	PresentationParamsColorSpaceEnumLinear  PresentationParamsColorSpaceEnum = "LINEAR"
	PresentationParamsColorSpaceEnumGamma   PresentationParamsColorSpaceEnum = "GAMMA"
)

type PresentationParams struct {
	BackgroundColor   *string                           `json:"backgroundColor,omitempty"`
	ColorSpace        *PresentationParamsColorSpaceEnum `json:"colorSpace,omitempty"`
	OrientingRotation *Quaternion                       `json:"orientingRotation,omitempty"`
}
