package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLongviewPlanSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateLongviewPlanDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateLongviewPlanRequest struct {
	Request  shared.LongviewPlan `request:"mediaType=application/json"`
	Security UpdateLongviewPlanSecurity
}

type UpdateLongviewPlanResponse struct {
	ContentType                                    string
	LongviewSubscription                           *shared.LongviewSubscription
	StatusCode                                     int64
	UpdateLongviewPlanDefaultApplicationJSONObject *UpdateLongviewPlanDefaultApplicationJSON
}
