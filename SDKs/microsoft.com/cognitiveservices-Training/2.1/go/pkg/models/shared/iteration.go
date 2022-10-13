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
	ClassificationType *IterationClassificationTypeEnum `json:"classificationType" form:"name=classificationType"`
	Created            *time.Time                       `json:"created" form:"name=created"`
	DomainID           *string                          `json:"domainId" form:"name=domainId"`
	Exportable         *bool                            `json:"exportable" form:"name=exportable"`
	ID                 *string                          `json:"id" form:"name=id"`
	IsDefault          *bool                            `json:"isDefault" form:"name=isDefault"`
	LastModified       *time.Time                       `json:"lastModified" form:"name=lastModified"`
	Name               *string                          `json:"name" form:"name=name"`
	ProjectID          *string                          `json:"projectId" form:"name=projectId"`
	Status             *string                          `json:"status" form:"name=status"`
	TrainedAt          *time.Time                       `json:"trainedAt" form:"name=trainedAt"`
}
