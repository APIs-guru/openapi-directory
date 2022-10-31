package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEventSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetEventRequest struct {
	PathParams GetEventPathParams
	Security   GetEventSecurity
}

type GetEventResponse struct {
	AuditEvent        *shared.AuditEvent
	ContentType       string
	ErrorNotFound     *shared.ErrorNotFound
	ErrorUnauthorized *shared.ErrorUnauthorized
	StatusCode        int64
}
