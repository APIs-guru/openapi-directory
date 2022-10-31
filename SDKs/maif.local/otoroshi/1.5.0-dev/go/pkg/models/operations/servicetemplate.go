package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceTemplatePathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type ServiceTemplateSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type ServiceTemplateRequest struct {
	PathParams ServiceTemplatePathParams
	Security   ServiceTemplateSecurity
}

type ServiceTemplateResponse struct {
	ContentType   string
	ErrorTemplate *shared.ErrorTemplate
	StatusCode    int64
}
