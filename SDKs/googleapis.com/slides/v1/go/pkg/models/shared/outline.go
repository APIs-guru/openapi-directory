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

// Outline
// The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
type Outline struct {
	DashStyle     *OutlineDashStyleEnum     `json:"dashStyle,omitempty"`
	OutlineFill   *OutlineFill              `json:"outlineFill,omitempty"`
	PropertyState *OutlinePropertyStateEnum `json:"propertyState,omitempty"`
	Weight        *Dimension                `json:"weight,omitempty"`
}
