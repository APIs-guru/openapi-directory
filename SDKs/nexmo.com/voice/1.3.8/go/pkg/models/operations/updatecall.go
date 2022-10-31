package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCallPathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=uuid"`
}

type UpdateCallSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type UpdateCallRequest struct {
	PathParams UpdateCallPathParams
	Request    interface{} `request:"mediaType=application/json"`
	Security   UpdateCallSecurity
}

type UpdateCallResponse struct {
	ContentType string
	StatusCode  int64
}
