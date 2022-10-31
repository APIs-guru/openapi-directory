package operations

import (
"openapi/pkg/models/shared")

type PostMarketingV3MarketingEventsEventsCreateSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostMarketingV3MarketingEventsEventsCreateSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostMarketingV3MarketingEventsEventsCreateSecurity struct {
    Option1 *PostMarketingV3MarketingEventsEventsCreateSecurityOption1 `security:"option"`
    Option2 *PostMarketingV3MarketingEventsEventsCreateSecurityOption2 `security:"option"`
    
}

type PostMarketingV3MarketingEventsEventsCreateRequest struct {
    Request shared.MarketingEventCreateRequestParams `request:"mediaType=application/json"`
    Security PostMarketingV3MarketingEventsEventsCreateSecurity 
    
}

type PostMarketingV3MarketingEventsEventsCreateResponse struct {
    Body []byte 
    ContentType string 
    MarketingEventDefaultResponse *shared.MarketingEventDefaultResponse 
    StatusCode int64 
    
}

