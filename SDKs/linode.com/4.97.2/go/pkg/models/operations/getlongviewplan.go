package operations

import (
	"openapi/pkg/models/shared"
)

type GetLongviewPlanSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLongviewPlanDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLongviewPlanRequest struct {
	Security GetLongviewPlanSecurity
}

type GetLongviewPlanResponse struct {
	ContentType                                 string
	LongviewSubscription                        *shared.LongviewSubscription
	StatusCode                                  int64
	GetLongviewPlanDefaultApplicationJSONObject *GetLongviewPlanDefaultApplicationJSON
}
