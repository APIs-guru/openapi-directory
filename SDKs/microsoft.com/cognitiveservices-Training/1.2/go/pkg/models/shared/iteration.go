package shared

import (
	"time"
)

// IterationInput
// Iteration model to be sent over JSON
type IterationInput struct {
	IsDefault *bool   `json:"IsDefault,omitempty" form:"name=IsDefault"`
	Name      *string `json:"Name,omitempty" form:"name=Name"`
}

// Iteration
// Iteration model to be sent over JSON
type Iteration struct {
	Created      *time.Time `json:"Created,omitempty"`
	DomainID     *string    `json:"DomainId,omitempty"`
	Exportable   *bool      `json:"Exportable,omitempty"`
	ID           *string    `json:"Id,omitempty"`
	IsDefault    *bool      `json:"IsDefault,omitempty"`
	LastModified *time.Time `json:"LastModified,omitempty"`
	Name         *string    `json:"Name,omitempty"`
	ProjectID    *string    `json:"ProjectId,omitempty"`
	Status       *string    `json:"Status,omitempty"`
	TrainedAt    *time.Time `json:"TrainedAt,omitempty"`
}
