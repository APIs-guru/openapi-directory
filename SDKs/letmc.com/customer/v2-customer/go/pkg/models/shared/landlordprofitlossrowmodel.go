package shared

type LandlordProfitLossRowModel struct {
	MonthTotals []KeyValuePairStringString `json:"MonthTotals"`
	NominalCode *string                    `json:"NominalCode"`
	Title       *string                    `json:"Title"`
	Total       *string                    `json:"Total"`
}
