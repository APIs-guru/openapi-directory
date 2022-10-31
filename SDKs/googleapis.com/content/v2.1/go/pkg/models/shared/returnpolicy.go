package shared



type ReturnPolicy struct {
    Country *string `json:"country,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Label *string `json:"label,omitempty"`
    Name *string `json:"name,omitempty"`
    NonFreeReturnReasons []string `json:"nonFreeReturnReasons,omitempty"`
    Policy *ReturnPolicyPolicy `json:"policy,omitempty"`
    ReturnPolicyID *string `json:"returnPolicyId,omitempty"`
    ReturnShippingFee *Price `json:"returnShippingFee,omitempty"`
    SeasonalOverrides []ReturnPolicySeasonalOverride `json:"seasonalOverrides,omitempty"`
    
}

