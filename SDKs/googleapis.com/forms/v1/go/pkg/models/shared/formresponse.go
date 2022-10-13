package shared

type FormResponse struct {
	Answers           map[string]Answer `json:"answers"`
	CreateTime        *string           `json:"createTime"`
	FormID            *string           `json:"formId"`
	LastSubmittedTime *string           `json:"lastSubmittedTime"`
	RespondentEmail   *string           `json:"respondentEmail"`
	ResponseID        *string           `json:"responseId"`
	TotalScore        *float64          `json:"totalScore"`
}
