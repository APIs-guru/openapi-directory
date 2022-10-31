package operations

import (
"openapi/pkg/models/shared")

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreatePathParams struct {
    ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
    SubscriberState string `pathParam:"style=simple,explode=false,name=subscriberState"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateQueryParams struct {
    ExternalAccountID *string `queryParam:"style=form,explode=true,name=externalAccountId"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateSecurity struct {
    Option1 *PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateSecurityOption1 `security:"option"`
    Option2 *PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateSecurityOption2 `security:"option"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateRequest struct {
    PathParams PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreatePathParams 
    QueryParams PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateQueryParams 
    Request shared.BatchInputMarketingEventEmailSubscriber `request:"mediaType=application/json"`
    Security PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateSecurity 
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateResponse struct {
    BatchResponseSubscriberEmailResponse *shared.BatchResponseSubscriberEmailResponse 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

