package shared

import (
	"time"
)

// IterationInput
// Iteration model to be sent over JSON
type IterationInput struct {
	IsDefault *bool   `json:"isDefault,omitempty" form:"name=isDefault"`
	Name      *string `json:"name,omitempty" form:"name=name"`
}

// Iteration
// Iteration model to be sent over JSON
type Iteration struct {
	Created      *time.Time `json:"created,omitempty"`
	DomainID     *string    `json:"domainId,omitempty"`
	Exportable   *bool      `json:"exportable,omitempty"`
	ID           *string    `json:"id,omitempty"`
	IsDefault    *bool      `json:"isDefault,omitempty"`
	LastModified *time.Time `json:"lastModified,omitempty"`
	Name         *string    `json:"name,omitempty"`
	ProjectID    *string    `json:"projectId,omitempty"`
	Status       *string    `json:"status,omitempty"`
	TrainedAt    *time.Time `json:"trainedAt,omitempty"`
}
