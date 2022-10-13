package shared

type LandlordProfitLossModel struct {
	DirectCosts     *LandlordProfitLossSectionModel `json:"DirectCosts"`
	GrossProfitLoss *LandlordProfitLossSectionModel `json:"GrossProfitLoss"`
	Income          *LandlordProfitLossSectionModel `json:"Income"`
}
