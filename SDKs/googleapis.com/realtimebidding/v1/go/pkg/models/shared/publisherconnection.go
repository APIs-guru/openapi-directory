package shared




type PublisherConnectionBiddingStateEnum string

const (
    PublisherConnectionBiddingStateEnumStateUnspecified PublisherConnectionBiddingStateEnum = "STATE_UNSPECIFIED"
PublisherConnectionBiddingStateEnumPending PublisherConnectionBiddingStateEnum = "PENDING"
PublisherConnectionBiddingStateEnumRejected PublisherConnectionBiddingStateEnum = "REJECTED"
PublisherConnectionBiddingStateEnumApproved PublisherConnectionBiddingStateEnum = "APPROVED"
)



type PublisherConnectionPublisherPlatformEnum string

const (
    PublisherConnectionPublisherPlatformEnumPublisherPlatformUnspecified PublisherConnectionPublisherPlatformEnum = "PUBLISHER_PLATFORM_UNSPECIFIED"
PublisherConnectionPublisherPlatformEnumGoogleAdManager PublisherConnectionPublisherPlatformEnum = "GOOGLE_AD_MANAGER"
PublisherConnectionPublisherPlatformEnumAdmob PublisherConnectionPublisherPlatformEnum = "ADMOB"
)


type PublisherConnection struct {
    BiddingState *PublisherConnectionBiddingStateEnum `json:"biddingState,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    PublisherPlatform *PublisherConnectionPublisherPlatformEnum `json:"publisherPlatform,omitempty"`
    
}

