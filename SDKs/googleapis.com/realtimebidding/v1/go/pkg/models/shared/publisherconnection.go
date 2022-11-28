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

// PublisherConnection
// An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher.
type PublisherConnection struct {
	BiddingState      *PublisherConnectionBiddingStateEnum      `json:"biddingState,omitempty"`
	CreateTime        *string                                   `json:"createTime,omitempty"`
	DisplayName       *string                                   `json:"displayName,omitempty"`
	Name              *string                                   `json:"name,omitempty"`
	PublisherPlatform *PublisherConnectionPublisherPlatformEnum `json:"publisherPlatform,omitempty"`
}
