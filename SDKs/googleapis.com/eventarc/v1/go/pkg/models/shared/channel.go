package shared

type ChannelStateEnum string

const (
	ChannelStateEnumStateUnspecified ChannelStateEnum = "STATE_UNSPECIFIED"
	ChannelStateEnumPending          ChannelStateEnum = "PENDING"
	ChannelStateEnumActive           ChannelStateEnum = "ACTIVE"
	ChannelStateEnumInactive         ChannelStateEnum = "INACTIVE"
)

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
