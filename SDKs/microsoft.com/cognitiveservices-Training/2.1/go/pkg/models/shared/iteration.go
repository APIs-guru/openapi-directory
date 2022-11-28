package shared

import (
	"time"
)

type IterationClassificationTypeEnum string

const (
	IterationClassificationTypeEnumMulticlass IterationClassificationTypeEnum = "Multiclass"
	IterationClassificationTypeEnumMultilabel IterationClassificationTypeEnum = "Multilabel"
)

// Iteration
// Iteration model to be sent over JSON
type Iteration struct {
	ClassificationType *IterationClassificationTypeEnum `json:"classificationType,omitempty"`
	Created            *time.Time                       `json:"created,omitempty"`
	DomainID           *string                          `json:"domainId,omitempty"`
	Exportable         *bool                            `json:"exportable,omitempty"`
	ID                 *string                          `json:"id,omitempty"`
	IsDefault          *bool                            `json:"isDefault,omitempty"`
	LastModified       *time.Time                       `json:"lastModified,omitempty"`
	Name               *string                          `json:"name,omitempty"`
	ProjectID          *string                          `json:"projectId,omitempty"`
	Status             *string                          `json:"status,omitempty"`
	TrainedAt          *time.Time                       `json:"trainedAt,omitempty"`
}

// IterationInput
// Iteration model to be sent over JSON
type IterationInput struct {
	IsDefault *bool   `json:"isDefault,omitempty" form:"name=isDefault"`
	Name      *string `json:"name,omitempty" form:"name=name"`
}
