package shared

import (
"time")

type ObWriteFundsConfirmationResponse1DataFundsAvailableResult struct {
    FundsAvailable bool `json:"FundsAvailable"`
    FundsAvailableDateTime time.Time `json:"FundsAvailableDateTime"`
    
}

type ObWriteFundsConfirmationResponse1Data struct {
    FundsAvailableResult *ObWriteFundsConfirmationResponse1DataFundsAvailableResult `json:"FundsAvailableResult,omitempty"`
    SupplementaryData map[string]interface{} `json:"SupplementaryData,omitempty"`
    
}

type ObWriteFundsConfirmationResponse1 struct {
    Data ObWriteFundsConfirmationResponse1Data `json:"Data"`
    Links *Links `json:"Links,omitempty"`
    Meta *Meta `json:"Meta,omitempty"`
    
}

