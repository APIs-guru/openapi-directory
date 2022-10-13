package shared

type TableCellBorderDashStyleEnum string

const (
	TableCellBorderDashStyleEnumDashStyleUnspecified TableCellBorderDashStyleEnum = "DASH_STYLE_UNSPECIFIED"
	TableCellBorderDashStyleEnumSolid                TableCellBorderDashStyleEnum = "SOLID"
	TableCellBorderDashStyleEnumDot                  TableCellBorderDashStyleEnum = "DOT"
	TableCellBorderDashStyleEnumDash                 TableCellBorderDashStyleEnum = "DASH"
)

type TableCellBorder struct {
	Color     *OptionalColor                `json:"color"`
	DashStyle *TableCellBorderDashStyleEnum `json:"dashStyle"`
	Width     *Dimension                    `json:"width"`
}
