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
	Action          *string                              `json:"action"`
	DateCreated     *time.Time                           `json:"dateCreated"`
	ExternalID      *string                              `json:"externalId"`
	Filename        *string                              `json:"filename"`
	Hyperparameters *PlanningLevelHyperparameterResponse `json:"hyperparameters"`
	ID              *int32                               `json:"id"`
	Method          *string                              `json:"method"`
	NoTimeseries    *int32                               `json:"noTimeseries"`
	Status          *PlanningLevelInfoResponseStatusEnum `json:"status"`
}
