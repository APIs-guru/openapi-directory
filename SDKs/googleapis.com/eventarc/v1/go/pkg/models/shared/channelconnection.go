package shared

// ChannelConnectionInput
// A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel.
type ChannelConnectionInput struct {
	ActivationToken *string `json:"activationToken,omitempty"`
	Channel         *string `json:"channel,omitempty"`
	Name            *string `json:"name,omitempty"`
}

// ChannelConnection
// A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel.
type ChannelConnection struct {
	ActivationToken *string `json:"activationToken,omitempty"`
	Channel         *string `json:"channel,omitempty"`
	CreateTime      *string `json:"createTime,omitempty"`
	Name            *string `json:"name,omitempty"`
	UID             *string `json:"uid,omitempty"`
	UpdateTime      *string `json:"updateTime,omitempty"`
}
