package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMessengerAccountPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
}

type DeleteMessengerAccountSecurity struct {
	BearerAuth *shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
}

type DeleteMessengerAccountRequest struct {
	PathParams DeleteMessengerAccountPathParams
	Security   DeleteMessengerAccountSecurity
}

type DeleteMessengerAccountResponse struct {
	FourHundredAndOneResponse   *shared.FourHundredAndOneResponse
	FourHundredAndThreeResponse *shared.FourHundredAndThreeResponse
	ContentType                 string
	StatusCode                  int64
}
