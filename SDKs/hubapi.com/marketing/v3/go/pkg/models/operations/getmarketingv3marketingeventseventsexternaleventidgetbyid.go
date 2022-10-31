package operations

import (
"openapi/pkg/models/shared")

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams struct {
    ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
    
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams struct {
    ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
    
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity struct {
    Option1 *GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurityOption1 `security:"option"`
    Option2 *GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurityOption2 `security:"option"`
    
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDRequest struct {
    PathParams GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams 
    QueryParams GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams 
    Security GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity 
    
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDResponse struct {
    Body []byte 
    ContentType string 
    MarketingEventPublicReadResponse *shared.MarketingEventPublicReadResponse 
    StatusCode int64 
    
}

