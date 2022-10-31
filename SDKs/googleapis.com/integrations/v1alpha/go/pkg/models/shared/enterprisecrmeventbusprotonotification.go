package shared

type EnterpriseCrmEventbusProtoNotification struct {
	BuganizerNotification *EnterpriseCrmEventbusProtoBuganizerNotification   `json:"buganizerNotification,omitempty"`
	EmailAddress          *EnterpriseCrmEventbusProtoAddress                 `json:"emailAddress,omitempty"`
	EscalatorQueue        *string                                            `json:"escalatorQueue,omitempty"`
	PubsubTopic           *string                                            `json:"pubsubTopic,omitempty"`
	Request               *EnterpriseCrmEventbusProtoCustomSuspensionRequest `json:"request,omitempty"`
}
