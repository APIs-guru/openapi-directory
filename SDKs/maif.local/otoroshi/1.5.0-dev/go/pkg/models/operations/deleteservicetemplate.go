package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServiceTemplatePathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type DeleteServiceTemplateSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type DeleteServiceTemplateRequest struct {
	PathParams DeleteServiceTemplatePathParams
	Security   DeleteServiceTemplateSecurity
}

type DeleteServiceTemplateResponse struct {
	ContentType string
	Deleted     *shared.Deleted
	StatusCode  int64
}
