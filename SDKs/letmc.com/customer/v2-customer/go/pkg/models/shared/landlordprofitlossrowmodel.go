package shared

type LandlordProfitLossRowModel struct {
	MonthTotals []KeyValuePairStringString `json:"MonthTotals,omitempty"`
	NominalCode *string                    `json:"NominalCode,omitempty"`
	Title       *string                    `json:"Title,omitempty"`
	Total       *string                    `json:"Total,omitempty"`
}
