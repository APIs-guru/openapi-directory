package shared

type AiPlanningLevelRequestMethodEnum string

const (
	AiPlanningLevelRequestMethodEnumIcueMlp AiPlanningLevelRequestMethodEnum = "icueMLP"
	AiPlanningLevelRequestMethodEnumIcueMlo AiPlanningLevelRequestMethodEnum = "icueMLO"
)

type AiPlanningLevelRequest struct {
	Data            []PlanningLevelDataDto           `json:"data"`
	Method          AiPlanningLevelRequestMethodEnum `json:"method"`
	Params          *PlanningLevelInfoRequest        `json:"params"`
	PlanningLevelID string                           `json:"planningLevelId"`
	StartDate       string                           `json:"startDate"`
}
