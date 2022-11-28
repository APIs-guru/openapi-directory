package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams struct {
	AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
}

type PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity struct {
	Hapikey          *shared.SchemeHapikey          `security:"scheme,type=apiKey,subtype=query"`
	DeveloperHapikey *shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PostMarketingV3MarketingEventsAppIDSettingsCreateRequest struct {
	PathParams PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams
	Request    shared.EventDetailSettingsURL `request:"mediaType=application/json"`
	Security   PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity
}

type PostMarketingV3MarketingEventsAppIDSettingsCreateResponse struct {
	Body                []byte
	ContentType         string
	EventDetailSettings *shared.EventDetailSettings
	StatusCode          int64
}
