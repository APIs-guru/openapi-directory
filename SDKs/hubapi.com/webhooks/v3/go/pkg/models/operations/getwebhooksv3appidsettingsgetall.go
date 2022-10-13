package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhooksV3AppIDSettingsGetAllPathParams struct {
	AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
}

type GetWebhooksV3AppIDSettingsGetAllSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetWebhooksV3AppIDSettingsGetAllRequest struct {
	PathParams GetWebhooksV3AppIDSettingsGetAllPathParams
	Security   GetWebhooksV3AppIDSettingsGetAllSecurity
}

type GetWebhooksV3AppIDSettingsGetAllResponse struct {
	Body             []byte
	ContentType      string
	SettingsResponse *shared.SettingsResponse
	StatusCode       int64
}
