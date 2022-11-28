package operations

import (
	"openapi/pkg/models/shared"
)

type GetVsmAccountPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
}

type GetVsmAccountSecurity struct {
	BearerAuth *shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
}

type GetVsmAccountRequest struct {
	PathParams GetVsmAccountPathParams
	Security   GetVsmAccountSecurity
}

type GetVsmAccountResponse struct {
	FourHundredAndOneResponse *shared.FourHundredAndOneResponse
	ContentType               string
	StatusCode                int64
	VsmAccountResponse        *shared.VsmAccountResponse
}
