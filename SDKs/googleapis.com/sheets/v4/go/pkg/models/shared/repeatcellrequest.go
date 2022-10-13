package shared

type RepeatCellRequest struct {
	Cell   *CellData  `json:"cell"`
	Fields *string    `json:"fields"`
	Range  *GridRange `json:"range"`
}
