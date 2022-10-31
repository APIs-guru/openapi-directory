package operations

import (
	"openapi/pkg/models/shared"
)

type GetCrmV3ExtensionsCardsAppIDGetAllPathParams struct {
	AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
}

type GetCrmV3ExtensionsCardsAppIDGetAllSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetCrmV3ExtensionsCardsAppIDGetAllRequest struct {
	PathParams GetCrmV3ExtensionsCardsAppIDGetAllPathParams
	Security   GetCrmV3ExtensionsCardsAppIDGetAllSecurity
}

type GetCrmV3ExtensionsCardsAppIDGetAllResponse struct {
	Body             []byte
	CardListResponse *shared.CardListResponse
	ContentType      string
	StatusCode       int64
}
