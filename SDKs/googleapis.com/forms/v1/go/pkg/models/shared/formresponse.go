package shared

type FormResponse struct {
	Answers           map[string]Answer `json:"answers,omitempty"`
	CreateTime        *string           `json:"createTime,omitempty"`
	FormID            *string           `json:"formId,omitempty"`
	LastSubmittedTime *string           `json:"lastSubmittedTime,omitempty"`
	RespondentEmail   *string           `json:"respondentEmail,omitempty"`
	ResponseID        *string           `json:"responseId,omitempty"`
	TotalScore        *float64          `json:"totalScore,omitempty"`
}
