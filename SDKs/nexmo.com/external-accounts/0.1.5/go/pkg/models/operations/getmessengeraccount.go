package operations

import (
	"openapi/pkg/models/shared"
)

type GetMessengerAccountPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
}

type GetMessengerAccountSecurity struct {
	BearerAuth *shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
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
