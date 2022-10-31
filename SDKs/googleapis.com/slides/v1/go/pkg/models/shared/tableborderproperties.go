package shared




type TableBorderPropertiesDashStyleEnum string

const (
    TableBorderPropertiesDashStyleEnumDashStyleUnspecified TableBorderPropertiesDashStyleEnum = "DASH_STYLE_UNSPECIFIED"
TableBorderPropertiesDashStyleEnumSolid TableBorderPropertiesDashStyleEnum = "SOLID"
TableBorderPropertiesDashStyleEnumDot TableBorderPropertiesDashStyleEnum = "DOT"
TableBorderPropertiesDashStyleEnumDash TableBorderPropertiesDashStyleEnum = "DASH"
TableBorderPropertiesDashStyleEnumDashDot TableBorderPropertiesDashStyleEnum = "DASH_DOT"
TableBorderPropertiesDashStyleEnumLongDash TableBorderPropertiesDashStyleEnum = "LONG_DASH"
TableBorderPropertiesDashStyleEnumLongDashDot TableBorderPropertiesDashStyleEnum = "LONG_DASH_DOT"
)


type TableBorderProperties struct {
    DashStyle *TableBorderPropertiesDashStyleEnum `json:"dashStyle,omitempty"`
    TableBorderFill *TableBorderFill `json:"tableBorderFill,omitempty"`
    Weight *Dimension `json:"weight,omitempty"`
    
}

