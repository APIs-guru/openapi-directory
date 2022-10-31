package operations

import (
"openapi/pkg/models/shared")

type PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelPathParams struct {
    ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
    
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelQueryParams struct {
    ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
    
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurity struct {
    Option1 *PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurityOption1 `security:"option"`
    Option2 *PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurityOption2 `security:"option"`
    
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelRequest struct {
    PathParams PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelPathParams 
    QueryParams PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelQueryParams 
    Security PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurity 
    
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelResponse struct {
    Body []byte 
    ContentType string 
    MarketingEventDefaultResponse *shared.MarketingEventDefaultResponse 
    StatusCode int64 
    
}

