package shared

type TableCellBackgroundFillPropertyStateEnum string

const (
	TableCellBackgroundFillPropertyStateEnumRendered    TableCellBackgroundFillPropertyStateEnum = "RENDERED"
	TableCellBackgroundFillPropertyStateEnumNotRendered TableCellBackgroundFillPropertyStateEnum = "NOT_RENDERED"
	TableCellBackgroundFillPropertyStateEnumInherit     TableCellBackgroundFillPropertyStateEnum = "INHERIT"
)

// TableCellBackgroundFill
// The table cell background fill.
type TableCellBackgroundFill struct {
	PropertyState *TableCellBackgroundFillPropertyStateEnum `json:"propertyState,omitempty"`
	SolidFill     *SolidFill                                `json:"solidFill,omitempty"`
}
