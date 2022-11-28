package shared

type ChannelStateEnum string

const (
	ChannelStateEnumStateUnspecified ChannelStateEnum = "STATE_UNSPECIFIED"
	ChannelStateEnumPending          ChannelStateEnum = "PENDING"
	ChannelStateEnumActive           ChannelStateEnum = "ACTIVE"
	ChannelStateEnumInactive         ChannelStateEnum = "INACTIVE"
)

// ChannelInput
// A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
type ChannelInput struct {
	CryptoKeyName *string `json:"cryptoKeyName,omitempty"`
	Name          *string `json:"name,omitempty"`
	Provider      *string `json:"provider,omitempty"`
}

// Channel
// A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
type Channel struct {
	ActivationToken *string           `json:"activationToken,omitempty"`
	CreateTime      *string           `json:"createTime,omitempty"`
	CryptoKeyName   *string           `json:"cryptoKeyName,omitempty"`
	Name            *string           `json:"name,omitempty"`
	Provider        *string           `json:"provider,omitempty"`
	PubsubTopic     *string           `json:"pubsubTopic,omitempty"`
	State           *ChannelStateEnum `json:"state,omitempty"`
	UID             *string           `json:"uid,omitempty"`
	UpdateTime      *string           `json:"updateTime,omitempty"`
}
