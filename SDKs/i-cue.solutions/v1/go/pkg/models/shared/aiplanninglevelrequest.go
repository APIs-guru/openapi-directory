package shared

type AiPlanningLevelRequestMethodEnum string

const (
	AiPlanningLevelRequestMethodEnumIcueMlp AiPlanningLevelRequestMethodEnum = "icueMLP"
	AiPlanningLevelRequestMethodEnumIcueMlo AiPlanningLevelRequestMethodEnum = "icueMLO"
)

type AiPlanningLevelRequest struct {
	Data            []PlanningLevelDataDto           `json:"data,omitempty"`
	Method          AiPlanningLevelRequestMethodEnum `json:"method"`
	Params          *PlanningLevelInfoRequest        `json:"params,omitempty"`
	PlanningLevelID string                           `json:"planningLevelId"`
	StartDate       string                           `json:"startDate"`
}
