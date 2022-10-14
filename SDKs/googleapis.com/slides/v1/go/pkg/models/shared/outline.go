package shared

type OutlineDashStyleEnum string

const (
	OutlineDashStyleEnumDashStyleUnspecified OutlineDashStyleEnum = "DASH_STYLE_UNSPECIFIED"
	OutlineDashStyleEnumSolid                OutlineDashStyleEnum = "SOLID"
	OutlineDashStyleEnumDot                  OutlineDashStyleEnum = "DOT"
	OutlineDashStyleEnumDash                 OutlineDashStyleEnum = "DASH"
	OutlineDashStyleEnumDashDot              OutlineDashStyleEnum = "DASH_DOT"
	OutlineDashStyleEnumLongDash             OutlineDashStyleEnum = "LONG_DASH"
	OutlineDashStyleEnumLongDashDot          OutlineDashStyleEnum = "LONG_DASH_DOT"
)

type OutlinePropertyStateEnum string

const (
	OutlinePropertyStateEnumRendered    OutlinePropertyStateEnum = "RENDERED"
	OutlinePropertyStateEnumNotRendered OutlinePropertyStateEnum = "NOT_RENDERED"
	OutlinePropertyStateEnumInherit     OutlinePropertyStateEnum = "INHERIT"
)

type Outline struct {
	DashStyle     *OutlineDashStyleEnum     `json:"dashStyle,omitempty"`
	OutlineFill   *OutlineFill              `json:"outlineFill,omitempty"`
	PropertyState *OutlinePropertyStateEnum `json:"propertyState,omitempty"`
	Weight        *Dimension                `json:"weight,omitempty"`
}
