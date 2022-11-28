package shared

type TextConfigProfileTypeEnum string

const (
	TextConfigProfileTypeEnumProfileTypeUnspecified TextConfigProfileTypeEnum = "PROFILE_TYPE_UNSPECIFIED"
	TextConfigProfileTypeEnumEmpty                  TextConfigProfileTypeEnum = "EMPTY"
	TextConfigProfileTypeEnumBasic                  TextConfigProfileTypeEnum = "BASIC"
)

// TextConfig
// Configures how to transform sensitive text `InfoTypes`.
type TextConfig struct {
	AdditionalTransformations []InfoTypeTransformation   `json:"additionalTransformations,omitempty"`
	ExcludeInfoTypes          []string                   `json:"excludeInfoTypes,omitempty"`
	ProfileType               *TextConfigProfileTypeEnum `json:"profileType,omitempty"`
	Transformations           []InfoTypeTransformation   `json:"transformations,omitempty"`
}
