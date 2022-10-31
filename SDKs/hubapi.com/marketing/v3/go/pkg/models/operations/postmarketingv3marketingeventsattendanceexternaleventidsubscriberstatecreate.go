package operations

import (
"openapi/pkg/models/shared")

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreatePathParams struct {
    ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
    SubscriberState string `pathParam:"style=simple,explode=false,name=subscriberState"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateQueryParams struct {
    ExternalAccountID *string `queryParam:"style=form,explode=true,name=externalAccountId"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurity struct {
    Option1 *PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurityOption1 `security:"option"`
    Option2 *PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurityOption2 `security:"option"`
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateRequest struct {
    PathParams PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreatePathParams 
    QueryParams PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateQueryParams 
    Request shared.BatchInputMarketingEventSubscriber `request:"mediaType=application/json"`
    Security PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurity 
    
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateResponse struct {
    BatchResponseSubscriberVidResponse *shared.BatchResponseSubscriberVidResponse 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

