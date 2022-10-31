package operations

import (
"openapi/pkg/models/shared")

type PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity struct {
    Option1 *PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption1 `security:"option"`
    Option2 *PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption2 `security:"option"`
    
}

type PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest struct {
    Request shared.BatchInputMarketingEventCreateRequestParams `request:"mediaType=application/json"`
    Security PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity 
    
}

type PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse struct {
    BatchResponseMarketingEventPublicDefaultResponse *shared.BatchResponseMarketingEventPublicDefaultResponse 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

