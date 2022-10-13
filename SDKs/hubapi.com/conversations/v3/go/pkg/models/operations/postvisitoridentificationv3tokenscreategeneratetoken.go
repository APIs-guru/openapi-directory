package operations

import (
	"openapi/pkg/models/shared"
)

type PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity struct {
	Option1 *PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption1 `security:"option"`
	Option2 *PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption2 `security:"option"`
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
