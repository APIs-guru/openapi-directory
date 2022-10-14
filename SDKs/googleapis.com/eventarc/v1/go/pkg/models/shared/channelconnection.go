package shared

type ChannelConnection struct {
	ActivationToken *string `json:"activationToken,omitempty"`
	Channel         *string `json:"channel,omitempty"`
	CreateTime      *string `json:"createTime,omitempty"`
	Name            *string `json:"name,omitempty"`
	UID             *string `json:"uid,omitempty"`
	UpdateTime      *string `json:"updateTime,omitempty"`
}
