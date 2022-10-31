package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceTemplatePathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type UpdateServiceTemplateSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceTemplateRequest struct {
	PathParams UpdateServiceTemplatePathParams
	Request    *shared.ErrorTemplate `request:"mediaType=application/json"`
	Security   UpdateServiceTemplateSecurity
}

type UpdateServiceTemplateResponse struct {
	ContentType   string
	ErrorTemplate *shared.ErrorTemplate
	StatusCode    int64
}
