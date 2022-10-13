package shared

type PubsubConfigStateEnum string

const (
	PubsubConfigStateEnumStateUnspecified          PubsubConfigStateEnum = "STATE_UNSPECIFIED"
	PubsubConfigStateEnumOk                        PubsubConfigStateEnum = "OK"
	PubsubConfigStateEnumSubscriptionDeleted       PubsubConfigStateEnum = "SUBSCRIPTION_DELETED"
	PubsubConfigStateEnumTopicDeleted              PubsubConfigStateEnum = "TOPIC_DELETED"
	PubsubConfigStateEnumSubscriptionMisconfigured PubsubConfigStateEnum = "SUBSCRIPTION_MISCONFIGURED"
)

type PubsubConfig struct {
	ServiceAccountEmail *string                `json:"serviceAccountEmail"`
	State               *PubsubConfigStateEnum `json:"state"`
	Subscription        *string                `json:"subscription"`
	Topic               *string                `json:"topic"`
}
