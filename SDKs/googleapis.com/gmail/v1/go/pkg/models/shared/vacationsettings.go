package shared

type VacationSettings struct {
	EnableAutoReply       *bool   `json:"enableAutoReply"`
	EndTime               *string `json:"endTime"`
	ResponseBodyHTML      *string `json:"responseBodyHtml"`
	ResponseBodyPlainText *string `json:"responseBodyPlainText"`
	ResponseSubject       *string `json:"responseSubject"`
	RestrictToContacts    *bool   `json:"restrictToContacts"`
	RestrictToDomain      *bool   `json:"restrictToDomain"`
	StartTime             *string `json:"startTime"`
}
