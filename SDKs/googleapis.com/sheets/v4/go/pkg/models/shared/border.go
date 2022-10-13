package shared

type BorderStyleEnum string

const (
	BorderStyleEnumStyleUnspecified BorderStyleEnum = "STYLE_UNSPECIFIED"
	BorderStyleEnumDotted           BorderStyleEnum = "DOTTED"
	BorderStyleEnumDashed           BorderStyleEnum = "DASHED"
	BorderStyleEnumSolid            BorderStyleEnum = "SOLID"
	BorderStyleEnumSolidMedium      BorderStyleEnum = "SOLID_MEDIUM"
	BorderStyleEnumSolidThick       BorderStyleEnum = "SOLID_THICK"
	BorderStyleEnumNone             BorderStyleEnum = "NONE"
	BorderStyleEnumDouble           BorderStyleEnum = "DOUBLE"
)

type Border struct {
	Color      *Color           `json:"color"`
	ColorStyle *ColorStyle      `json:"colorStyle"`
	Style      *BorderStyleEnum `json:"style"`
	Width      *int32           `json:"width"`
}
