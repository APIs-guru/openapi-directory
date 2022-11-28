package operations

import (
	"openapi/pkg/models/shared"
)

type CancelAccountSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CancelAccount200ApplicationJSON struct {
	SurveyLink *string `json:"survey_link,omitempty"`
}

type CancelAccount409ApplicationJSONErrors struct {
	Reason *string `json:"reason,omitempty"`
}

type CancelAccount409ApplicationJSON struct {
	Errors []CancelAccount409ApplicationJSONErrors `json:"errors,omitempty"`
}

type CancelAccountDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CancelAccountRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security CancelAccountSecurity
}

type CancelAccountResponse struct {
	ContentType                               string
	StatusCode                                int64
	CancelAccount200ApplicationJSONObject     *CancelAccount200ApplicationJSON
	CancelAccount409ApplicationJSONObject     *CancelAccount409ApplicationJSON
	CancelAccountDefaultApplicationJSONObject *CancelAccountDefaultApplicationJSON
}
