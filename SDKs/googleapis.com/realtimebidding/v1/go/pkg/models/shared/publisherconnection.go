package shared

type PublisherConnectionBiddingStateEnum string

const (
	PublisherConnectionBiddingStateEnumStateUnspecified PublisherConnectionBiddingStateEnum = "STATE_UNSPECIFIED"
	PublisherConnectionBiddingStateEnumPending          PublisherConnectionBiddingStateEnum = "PENDING"
	PublisherConnectionBiddingStateEnumRejected         PublisherConnectionBiddingStateEnum = "REJECTED"
	PublisherConnectionBiddingStateEnumApproved         PublisherConnectionBiddingStateEnum = "APPROVED"
)

type PublisherConnectionPublisherPlatformEnum string

const (
	PublisherConnectionPublisherPlatformEnumPublisherPlatformUnspecified PublisherConnectionPublisherPlatformEnum = "PUBLISHER_PLATFORM_UNSPECIFIED"
	PublisherConnectionPublisherPlatformEnumGoogleAdManager              PublisherConnectionPublisherPlatformEnum = "GOOGLE_AD_MANAGER"
	PublisherConnectionPublisherPlatformEnumAdmob                        PublisherConnectionPublisherPlatformEnum = "ADMOB"
)

type PublisherConnection struct {
	BiddingState      *PublisherConnectionBiddingStateEnum      `json:"biddingState"`
	CreateTime        *string                                   `json:"createTime"`
	DisplayName       *string                                   `json:"displayName"`
	Name              *string                                   `json:"name"`
	PublisherPlatform *PublisherConnectionPublisherPlatformEnum `json:"publisherPlatform"`
}
