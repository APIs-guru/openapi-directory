package operations

import (
	"openapi/pkg/models/shared"
)

type CheckAvailabilityOfFundsHeaders struct {
	Authorization           *string `header:"name=Authorization"`
	Digest                  *string `header:"name=Digest"`
	Signature               *string `header:"name=Signature"`
	TppSignatureCertificate *string `header:"name=TPP-Signature-Certificate"`
	XRequestID              string  `header:"name=X-Request-ID"`
}

type CheckAvailabilityOfFundsSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type CheckAvailabilityOfFundsRequest struct {
	Headers  CheckAvailabilityOfFundsHeaders
	Request  shared.ConfirmationOfFunds `request:"mediaType=application/json"`
	Security CheckAvailabilityOfFundsSecurity
}

type CheckAvailabilityOfFunds200ApplicationJSON struct {
	FundsAvailable bool `json:"fundsAvailable"`
}

type CheckAvailabilityOfFundsResponse struct {
	ContentType                                      string
	Error400Ais                                      *shared.Error400Ais
	Error400NgAis                                    *shared.Error400NgAis
	Error401NgPiis                                   *shared.Error401NgPiis
	Error401Piis                                     *shared.Error401Piis
	Error403NgPiis                                   *shared.Error403NgPiis
	Error403Piis                                     *shared.Error403Piis
	Error404NgPiis                                   *shared.Error404NgPiis
	Error404Piis                                     *shared.Error404Piis
	Error405NgPiis                                   *shared.Error405NgPiis
	Error405Piis                                     *shared.Error405Piis
	Error409NgPiis                                   *shared.Error409NgPiis
	Error409Piis                                     *shared.Error409Piis
	Headers                                          map[string][]string
	StatusCode                                       int64
	CheckAvailabilityOfFunds200ApplicationJSONObject *CheckAvailabilityOfFunds200ApplicationJSON
}
