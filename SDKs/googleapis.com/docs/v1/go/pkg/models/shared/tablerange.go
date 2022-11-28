package shared

// TableRange
// A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with table cell location = (table_start_location, row = 0, column = 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]
type TableRange struct {
	ColumnSpan        *int32             `json:"columnSpan,omitempty"`
	RowSpan           *int32             `json:"rowSpan,omitempty"`
	TableCellLocation *TableCellLocation `json:"tableCellLocation,omitempty"`
}
