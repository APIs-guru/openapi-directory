package operations

import (
	"openapi/pkg/models/shared"
)

type CancelAccountSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CancelAccountSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CancelAccountSecurity struct {
	Option1 *CancelAccountSecurityOption1 `security:"option"`
	Option2 *CancelAccountSecurityOption2 `security:"option"`
}

type CancelAccountRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security CancelAccountSecurity
}

type CancelAccount200ApplicationJSON struct {
	SurveyLink *string `json:"survey_link"`
}

type CancelAccount409ApplicationJSONErrors struct {
	Reason *string `json:"reason"`
}

type CancelAccount409ApplicationJSON struct {
	Errors []CancelAccount409ApplicationJSONErrors `json:"errors"`
}

type CancelAccountDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CancelAccountResponse struct {
	ContentType                               string
	StatusCode                                int64
	CancelAccount200ApplicationJSONObject     *CancelAccount200ApplicationJSON
	CancelAccount409ApplicationJSONObject     *CancelAccount409ApplicationJSON
	CancelAccountDefaultApplicationJSONObject *CancelAccountDefaultApplicationJSON
}
