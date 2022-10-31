package shared




type PubsubConfigStateEnum string

const (
    PubsubConfigStateEnumStateUnspecified PubsubConfigStateEnum = "STATE_UNSPECIFIED"
PubsubConfigStateEnumOk PubsubConfigStateEnum = "OK"
PubsubConfigStateEnumSubscriptionDeleted PubsubConfigStateEnum = "SUBSCRIPTION_DELETED"
PubsubConfigStateEnumTopicDeleted PubsubConfigStateEnum = "TOPIC_DELETED"
PubsubConfigStateEnumSubscriptionMisconfigured PubsubConfigStateEnum = "SUBSCRIPTION_MISCONFIGURED"
)


type PubsubConfig struct {
    ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
    State *PubsubConfigStateEnum `json:"state,omitempty"`
    Subscription *string `json:"subscription,omitempty"`
    Topic *string `json:"topic,omitempty"`
    
}

