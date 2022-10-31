package shared

import (
	"time"
)

type ObFundsConfirmationResponse1DataInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObFundsConfirmationResponse1Data struct {
	ConsentID           string                                           `json:"ConsentId"`
	CreationDateTime    time.Time                                        `json:"CreationDateTime"`
	FundsAvailable      bool                                             `json:"FundsAvailable"`
	FundsConfirmationID string                                           `json:"FundsConfirmationId"`
	InstructedAmount    ObFundsConfirmationResponse1DataInstructedAmount `json:"InstructedAmount"`
	Reference           string                                           `json:"Reference"`
}

type ObFundsConfirmationResponse1 struct {
	Data  ObFundsConfirmationResponse1Data `json:"Data"`
	Links *Links                           `json:"Links,omitempty"`
	Meta  *Meta                            `json:"Meta,omitempty"`
}
