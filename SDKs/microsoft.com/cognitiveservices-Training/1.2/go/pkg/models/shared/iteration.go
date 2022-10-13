package shared

import (
	"time"
)

type Iteration struct {
	Created      *time.Time `json:"Created" form:"name=Created"`
	DomainID     *string    `json:"DomainId" form:"name=DomainId"`
	Exportable   *bool      `json:"Exportable" form:"name=Exportable"`
	ID           *string    `json:"Id" form:"name=Id"`
	IsDefault    *bool      `json:"IsDefault" form:"name=IsDefault"`
	LastModified *time.Time `json:"LastModified" form:"name=LastModified"`
	Name         *string    `json:"Name" form:"name=Name"`
	ProjectID    *string    `json:"ProjectId" form:"name=ProjectId"`
	Status       *string    `json:"Status" form:"name=Status"`
	TrainedAt    *time.Time `json:"TrainedAt" form:"name=TrainedAt"`
}
