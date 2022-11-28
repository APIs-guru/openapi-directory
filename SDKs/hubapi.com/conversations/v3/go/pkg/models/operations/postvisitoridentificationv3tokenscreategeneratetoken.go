package operations

import (
	"openapi/pkg/models/shared"
)

type PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
}

type PostVisitorIdentificationV3TokensCreateGenerateTokenRequest struct {
	Request  shared.IdentificationTokenGenerationRequest `request:"mediaType=application/json"`
	Security PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity
}

type PostVisitorIdentificationV3TokensCreateGenerateTokenResponse struct {
	Body                        []byte
	ContentType                 string
	IdentificationTokenResponse *shared.IdentificationTokenResponse
	StatusCode                  int64
}
