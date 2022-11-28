package shared

type PubsubConfigStateEnum string

const (
	PubsubConfigStateEnumStateUnspecified          PubsubConfigStateEnum = "STATE_UNSPECIFIED"
	PubsubConfigStateEnumOk                        PubsubConfigStateEnum = "OK"
	PubsubConfigStateEnumSubscriptionDeleted       PubsubConfigStateEnum = "SUBSCRIPTION_DELETED"
	PubsubConfigStateEnumTopicDeleted              PubsubConfigStateEnum = "TOPIC_DELETED"
	PubsubConfigStateEnumSubscriptionMisconfigured PubsubConfigStateEnum = "SUBSCRIPTION_MISCONFIGURED"
)

// PubsubConfigInput
// PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
type PubsubConfigInput struct {
	ServiceAccountEmail *string                `json:"serviceAccountEmail,omitempty"`
	State               *PubsubConfigStateEnum `json:"state,omitempty"`
	Topic               *string                `json:"topic,omitempty"`
}

// PubsubConfig
// PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
type PubsubConfig struct {
	ServiceAccountEmail *string                `json:"serviceAccountEmail,omitempty"`
	State               *PubsubConfigStateEnum `json:"state,omitempty"`
	Subscription        *string                `json:"subscription,omitempty"`
	Topic               *string                `json:"topic,omitempty"`
}
