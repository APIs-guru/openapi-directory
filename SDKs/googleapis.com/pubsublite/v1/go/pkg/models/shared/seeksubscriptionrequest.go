package shared

type SeekSubscriptionRequestNamedTargetEnum string

const (
	SeekSubscriptionRequestNamedTargetEnumNamedTargetUnspecified SeekSubscriptionRequestNamedTargetEnum = "NAMED_TARGET_UNSPECIFIED"
	SeekSubscriptionRequestNamedTargetEnumTail                   SeekSubscriptionRequestNamedTargetEnum = "TAIL"
	SeekSubscriptionRequestNamedTargetEnumHead                   SeekSubscriptionRequestNamedTargetEnum = "HEAD"
)

type SeekSubscriptionRequest struct {
	NamedTarget *SeekSubscriptionRequestNamedTargetEnum `json:"namedTarget"`
	TimeTarget  *TimeTarget                             `json:"timeTarget"`
}
