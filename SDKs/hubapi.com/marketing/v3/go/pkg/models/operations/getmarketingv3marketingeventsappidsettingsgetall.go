package operations

import (
"openapi/pkg/models/shared")

type GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    
}

type GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurityOption2 struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity struct {
    Option1 *GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurityOption1 `security:"option"`
    Option2 *GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurityOption2 `security:"option"`
    
}

type GetMarketingV3MarketingEventsAppIDSettingsGetAllRequest struct {
    PathParams GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams 
    Security GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity 
    
}

type GetMarketingV3MarketingEventsAppIDSettingsGetAllResponse struct {
    Body []byte 
    ContentType string 
    EventDetailSettings *shared.EventDetailSettings 
    StatusCode int64 
    
}

