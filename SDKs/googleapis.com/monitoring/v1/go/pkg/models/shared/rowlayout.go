package shared

// RowLayout
// A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row.
type RowLayout struct {
	Rows []Row `json:"rows,omitempty"`
}
