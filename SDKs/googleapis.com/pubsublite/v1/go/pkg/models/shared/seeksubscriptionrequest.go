package shared

type SeekSubscriptionRequestNamedTargetEnum string

const (
	SeekSubscriptionRequestNamedTargetEnumNamedTargetUnspecified SeekSubscriptionRequestNamedTargetEnum = "NAMED_TARGET_UNSPECIFIED"
	SeekSubscriptionRequestNamedTargetEnumTail                   SeekSubscriptionRequestNamedTargetEnum = "TAIL"
	SeekSubscriptionRequestNamedTargetEnumHead                   SeekSubscriptionRequestNamedTargetEnum = "HEAD"
)

// SeekSubscriptionRequest
// Request for SeekSubscription.
type SeekSubscriptionRequest struct {
	NamedTarget *SeekSubscriptionRequestNamedTargetEnum `json:"namedTarget,omitempty"`
	TimeTarget  *TimeTarget                             `json:"timeTarget,omitempty"`
}
