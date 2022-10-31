package shared




type TableCellBorderDashStyleEnum string

const (
    TableCellBorderDashStyleEnumDashStyleUnspecified TableCellBorderDashStyleEnum = "DASH_STYLE_UNSPECIFIED"
TableCellBorderDashStyleEnumSolid TableCellBorderDashStyleEnum = "SOLID"
TableCellBorderDashStyleEnumDot TableCellBorderDashStyleEnum = "DOT"
TableCellBorderDashStyleEnumDash TableCellBorderDashStyleEnum = "DASH"
)


type TableCellBorder struct {
    Color *OptionalColor `json:"color,omitempty"`
    DashStyle *TableCellBorderDashStyleEnum `json:"dashStyle,omitempty"`
    Width *Dimension `json:"width,omitempty"`
    
}

