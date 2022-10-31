package operations

import (
	"openapi/pkg/models/shared"
)

type PostCrmV3ExtensionsCardsAppIDCreatePathParams struct {
	AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
}

type PostCrmV3ExtensionsCardsAppIDCreateSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PostCrmV3ExtensionsCardsAppIDCreateRequest struct {
	PathParams PostCrmV3ExtensionsCardsAppIDCreatePathParams
	Request    shared.CardCreateRequest `request:"mediaType=application/json"`
	Security   PostCrmV3ExtensionsCardsAppIDCreateSecurity
}

type PostCrmV3ExtensionsCardsAppIDCreateResponse struct {
	Body         []byte
	CardResponse *shared.CardResponse
	ContentType  string
	StatusCode   int64
}
