package shared

type ReturnPolicy struct {
	Country              *string                        `json:"country"`
	Kind                 *string                        `json:"kind"`
	Label                *string                        `json:"label"`
	Name                 *string                        `json:"name"`
	NonFreeReturnReasons []string                       `json:"nonFreeReturnReasons"`
	Policy               *ReturnPolicyPolicy            `json:"policy"`
	ReturnPolicyID       *string                        `json:"returnPolicyId"`
	ReturnShippingFee    *Price                         `json:"returnShippingFee"`
	SeasonalOverrides    []ReturnPolicySeasonalOverride `json:"seasonalOverrides"`
}
