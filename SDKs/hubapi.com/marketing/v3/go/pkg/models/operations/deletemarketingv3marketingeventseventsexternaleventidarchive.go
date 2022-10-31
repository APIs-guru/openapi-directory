package operations

import (
"openapi/pkg/models/shared")

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams struct {
    ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
    
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams struct {
    ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
    
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity struct {
    Option1 *DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurityOption1 `security:"option"`
    Option2 *DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurityOption2 `security:"option"`
    
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveRequest struct {
    PathParams DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams 
    QueryParams DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams 
    Security DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity 
    
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

