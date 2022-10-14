package shared

import (
	"time"
)

type PlanningLevelInfoResponseStatusEnum string

const (
	PlanningLevelInfoResponseStatusEnumUnproccessed PlanningLevelInfoResponseStatusEnum = "Unproccessed"
	PlanningLevelInfoResponseStatusEnumRunning      PlanningLevelInfoResponseStatusEnum = "Running"
	PlanningLevelInfoResponseStatusEnumComplete     PlanningLevelInfoResponseStatusEnum = "Complete"
	PlanningLevelInfoResponseStatusEnumFailed       PlanningLevelInfoResponseStatusEnum = "Failed"
)

type PlanningLevelInfoResponse struct {
	Action          *string                              `json:"action,omitempty"`
	DateCreated     *time.Time                           `json:"dateCreated,omitempty"`
	ExternalID      *string                              `json:"externalId,omitempty"`
	Filename        *string                              `json:"filename,omitempty"`
	Hyperparameters *PlanningLevelHyperparameterResponse `json:"hyperparameters,omitempty"`
	ID              *int32                               `json:"id,omitempty"`
	Method          *string                              `json:"method,omitempty"`
	NoTimeseries    *int32                               `json:"noTimeseries,omitempty"`
	Status          *PlanningLevelInfoResponseStatusEnum `json:"status,omitempty"`
}
