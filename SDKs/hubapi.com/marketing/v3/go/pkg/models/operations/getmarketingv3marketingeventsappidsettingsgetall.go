package operations

import (
	"openapi/pkg/models/shared"
)

type GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams struct {
	AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
}

type GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity struct {
	Hapikey          *shared.SchemeHapikey          `security:"scheme,type=apiKey,subtype=query"`
	DeveloperHapikey *shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetMarketingV3MarketingEventsAppIDSettingsGetAllRequest struct {
	PathParams GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams
	Security   GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity
}

type GetMarketingV3MarketingEventsAppIDSettingsGetAllResponse struct {
	Body                []byte
	ContentType         string
	EventDetailSettings *shared.EventDetailSettings
	StatusCode          int64
}
