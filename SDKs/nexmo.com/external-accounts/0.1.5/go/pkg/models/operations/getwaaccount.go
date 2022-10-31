package operations

import (
	"openapi/pkg/models/shared"
)

type GetWaAccountPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
}

type GetWaAccountSecurityOption1 struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetWaAccountSecurityOption2 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetWaAccountSecurity struct {
	Option1 *GetWaAccountSecurityOption1 `security:"option"`
	Option2 *GetWaAccountSecurityOption2 `security:"option"`
}

type GetWaAccountRequest struct {
	PathParams GetWaAccountPathParams
	Security   GetWaAccountSecurity
}

type GetWaAccountResponse struct {
	FourHundredAndOneResponse *shared.FourHundredAndOneResponse
	ContentType               string
	StatusCode                int64
	WaAccountResponse         *shared.WaAccountResponse
}
