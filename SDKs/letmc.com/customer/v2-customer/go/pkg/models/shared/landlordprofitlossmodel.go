package shared

// LandlordProfitLossModel
// Class to represent proffit loss report.
type LandlordProfitLossModel struct {
	DirectCosts     *LandlordProfitLossSectionModel `json:"DirectCosts,omitempty"`
	GrossProfitLoss *LandlordProfitLossSectionModel `json:"GrossProfitLoss,omitempty"`
	Income          *LandlordProfitLossSectionModel `json:"Income,omitempty"`
}
