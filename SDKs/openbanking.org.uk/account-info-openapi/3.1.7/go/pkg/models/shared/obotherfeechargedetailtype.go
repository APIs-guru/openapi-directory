package shared



type ObOtherFeeChargeDetailType struct {
    Code *string `json:"Code,omitempty"`
    Description string `json:"Description"`
    FeeCategory ObFeeCategory1CodeEnum `json:"FeeCategory"`
    Name string `json:"Name"`
    
}

