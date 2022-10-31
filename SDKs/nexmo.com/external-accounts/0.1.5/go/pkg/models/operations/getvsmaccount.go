package operations

import (
	"openapi/pkg/models/shared"
)

type GetVsmAccountPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
}

type GetVsmAccountSecurityOption1 struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetVsmAccountSecurityOption2 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetVsmAccountSecurity struct {
	Option1 *GetVsmAccountSecurityOption1 `security:"option"`
	Option2 *GetVsmAccountSecurityOption2 `security:"option"`
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
