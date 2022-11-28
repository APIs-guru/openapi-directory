package shared

// LandlordProfitLossSectionModel
// Class for a group of entries.
type LandlordProfitLossSectionModel struct {
	Rows []LandlordProfitLossRowModel `json:"Rows,omitempty"`
}
