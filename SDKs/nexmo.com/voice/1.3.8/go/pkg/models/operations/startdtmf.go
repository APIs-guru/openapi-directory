package operations

import (
	"openapi/pkg/models/shared"
)

type StartDtmfPathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=uuid"`
}

type StartDtmfSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type StartDtmfRequest struct {
	PathParams StartDtmfPathParams
	Request    shared.DtmfRequest `request:"mediaType=application/json"`
	Security   StartDtmfSecurity
}

type StartDtmfResponse struct {
	ContentType  string
	DtmfResponse *shared.DtmfResponse
	StatusCode   int64
}
