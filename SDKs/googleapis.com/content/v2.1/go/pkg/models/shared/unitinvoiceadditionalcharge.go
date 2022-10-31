package shared



type UnitInvoiceAdditionalCharge struct {
    AdditionalChargeAmount *Amount `json:"additionalChargeAmount,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

