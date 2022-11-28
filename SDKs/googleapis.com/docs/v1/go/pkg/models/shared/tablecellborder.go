package shared

type TableCellBorderDashStyleEnum string

const (
	TableCellBorderDashStyleEnumDashStyleUnspecified TableCellBorderDashStyleEnum = "DASH_STYLE_UNSPECIFIED"
	TableCellBorderDashStyleEnumSolid                TableCellBorderDashStyleEnum = "SOLID"
	TableCellBorderDashStyleEnumDot                  TableCellBorderDashStyleEnum = "DOT"
	TableCellBorderDashStyleEnumDash                 TableCellBorderDashStyleEnum = "DASH"
)

// TableCellBorder
// A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
type TableCellBorder struct {
	Color     *OptionalColor                `json:"color,omitempty"`
	DashStyle *TableCellBorderDashStyleEnum `json:"dashStyle,omitempty"`
	Width     *Dimension                    `json:"width,omitempty"`
}
