package shared

import (
	"time"
)

type IterationClassificationTypeEnum string

const (
	IterationClassificationTypeEnumMulticlass IterationClassificationTypeEnum = "Multiclass"
	IterationClassificationTypeEnumMultilabel IterationClassificationTypeEnum = "Multilabel"
)

type Iteration struct {
	ClassificationType *IterationClassificationTypeEnum `json:"classificationType,omitempty" form:"name=classificationType"`
	Created            *time.Time                       `json:"created,omitempty" form:"name=created"`
	DomainID           *string                          `json:"domainId,omitempty" form:"name=domainId"`
	Exportable         *bool                            `json:"exportable,omitempty" form:"name=exportable"`
	ID                 *string                          `json:"id,omitempty" form:"name=id"`
	IsDefault          *bool                            `json:"isDefault,omitempty" form:"name=isDefault"`
	LastModified       *time.Time                       `json:"lastModified,omitempty" form:"name=lastModified"`
	Name               *string                          `json:"name,omitempty" form:"name=name"`
	ProjectID          *string                          `json:"projectId,omitempty" form:"name=projectId"`
	Status             *string                          `json:"status,omitempty" form:"name=status"`
	TrainedAt          *time.Time                       `json:"trainedAt,omitempty" form:"name=trainedAt"`
}
