package shared

type RepeatCellRequest struct {
	Cell   *CellData  `json:"cell,omitempty"`
	Fields *string    `json:"fields,omitempty"`
	Range  *GridRange `json:"range,omitempty"`
}
