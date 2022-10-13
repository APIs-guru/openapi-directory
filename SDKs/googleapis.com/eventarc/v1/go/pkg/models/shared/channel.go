package shared

type ChannelStateEnum string

const (
	ChannelStateEnumStateUnspecified ChannelStateEnum = "STATE_UNSPECIFIED"
	ChannelStateEnumPending          ChannelStateEnum = "PENDING"
	ChannelStateEnumActive           ChannelStateEnum = "ACTIVE"
	ChannelStateEnumInactive         ChannelStateEnum = "INACTIVE"
)

type Channel struct {
	ActivationToken *string           `json:"activationToken"`
	CreateTime      *string           `json:"createTime"`
	CryptoKeyName   *string           `json:"cryptoKeyName"`
	Name            *string           `json:"name"`
	Provider        *string           `json:"provider"`
	PubsubTopic     *string           `json:"pubsubTopic"`
	State           *ChannelStateEnum `json:"state"`
	UID             *string           `json:"uid"`
	UpdateTime      *string           `json:"updateTime"`
}
