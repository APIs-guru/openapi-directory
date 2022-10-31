package shared



type ObFundsConfirmation1DataInstructedAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObFundsConfirmation1Data struct {
    ConsentID string `json:"ConsentId"`
    InstructedAmount ObFundsConfirmation1DataInstructedAmount `json:"InstructedAmount"`
    Reference string `json:"Reference"`
    
}

type ObFundsConfirmation1 struct {
    Data ObFundsConfirmation1Data `json:"Data"`
    
}

