package shared

import (
	"time"
)

type Iteration struct {
	Created      *time.Time `json:"Created,omitempty" form:"name=Created"`
	DomainID     *string    `json:"DomainId,omitempty" form:"name=DomainId"`
	Exportable   *bool      `json:"Exportable,omitempty" form:"name=Exportable"`
	ID           *string    `json:"Id,omitempty" form:"name=Id"`
	IsDefault    *bool      `json:"IsDefault,omitempty" form:"name=IsDefault"`
	LastModified *time.Time `json:"LastModified,omitempty" form:"name=LastModified"`
	Name         *string    `json:"Name,omitempty" form:"name=Name"`
	ProjectID    *string    `json:"ProjectId,omitempty" form:"name=ProjectId"`
	Status       *string    `json:"Status,omitempty" form:"name=Status"`
	TrainedAt    *time.Time `json:"TrainedAt,omitempty" form:"name=TrainedAt"`
}
