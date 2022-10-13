package shared

type ChannelConnection struct {
	ActivationToken *string `json:"activationToken"`
	Channel         *string `json:"channel"`
	CreateTime      *string `json:"createTime"`
	Name            *string `json:"name"`
	UID             *string `json:"uid"`
	UpdateTime      *string `json:"updateTime"`
}
