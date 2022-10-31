package operations

import (
	"openapi/pkg/models/shared"
)

type PatchCrmV3ExtensionsCardsAppIDCardIDUpdatePathParams struct {
	AppID  int32  `pathParam:"style=simple,explode=false,name=appId"`
	CardID string `pathParam:"style=simple,explode=false,name=cardId"`
}

type PatchCrmV3ExtensionsCardsAppIDCardIDUpdateSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PatchCrmV3ExtensionsCardsAppIDCardIDUpdateRequest struct {
	PathParams PatchCrmV3ExtensionsCardsAppIDCardIDUpdatePathParams
	Request    shared.CardPatchRequest `request:"mediaType=application/json"`
	Security   PatchCrmV3ExtensionsCardsAppIDCardIDUpdateSecurity
}

type PatchCrmV3ExtensionsCardsAppIDCardIDUpdateResponse struct {
	Body         []byte
	CardResponse *shared.CardResponse
	ContentType  string
	StatusCode   int64
}
