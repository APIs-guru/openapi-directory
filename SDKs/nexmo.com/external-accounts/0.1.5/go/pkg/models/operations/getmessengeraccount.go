package operations

import (
	"openapi/pkg/models/shared"
)

type GetMessengerAccountPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
}

type GetMessengerAccountSecurityOption1 struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetMessengerAccountSecurityOption2 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetMessengerAccountSecurity struct {
	Option1 *GetMessengerAccountSecurityOption1 `security:"option"`
	Option2 *GetMessengerAccountSecurityOption2 `security:"option"`
}

type GetMessengerAccountRequest struct {
	PathParams GetMessengerAccountPathParams
	Security   GetMessengerAccountSecurity
}

type GetMessengerAccountResponse struct {
	FourHundredAndOneResponse *shared.FourHundredAndOneResponse
	ContentType               string
	MessengerAccountResponse  *shared.MessengerAccountResponse
	StatusCode                int64
}
