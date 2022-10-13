package shared

type TableCellBackgroundFillPropertyStateEnum string

const (
	TableCellBackgroundFillPropertyStateEnumRendered    TableCellBackgroundFillPropertyStateEnum = "RENDERED"
	TableCellBackgroundFillPropertyStateEnumNotRendered TableCellBackgroundFillPropertyStateEnum = "NOT_RENDERED"
	TableCellBackgroundFillPropertyStateEnumInherit     TableCellBackgroundFillPropertyStateEnum = "INHERIT"
)

type TableCellBackgroundFill struct {
	PropertyState *TableCellBackgroundFillPropertyStateEnum `json:"propertyState"`
	SolidFill     *SolidFill                                `json:"solidFill"`
}
