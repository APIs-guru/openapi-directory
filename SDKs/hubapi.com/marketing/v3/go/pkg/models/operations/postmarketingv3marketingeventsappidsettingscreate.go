package operations

import (
"openapi/pkg/models/shared")

type PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    
}

type PostMarketingV3MarketingEventsAppIDSettingsCreateSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostMarketingV3MarketingEventsAppIDSettingsCreateSecurityOption2 struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity struct {
    Option1 *PostMarketingV3MarketingEventsAppIDSettingsCreateSecurityOption1 `security:"option"`
    Option2 *PostMarketingV3MarketingEventsAppIDSettingsCreateSecurityOption2 `security:"option"`
    
}

type PostMarketingV3MarketingEventsAppIDSettingsCreateRequest struct {
    PathParams PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams 
    Request shared.EventDetailSettingsURL `request:"mediaType=application/json"`
    Security PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity 
    
}

type PostMarketingV3MarketingEventsAppIDSettingsCreateResponse struct {
    Body []byte 
    ContentType string 
    EventDetailSettings *shared.EventDetailSettings 
    StatusCode int64 
    
}

