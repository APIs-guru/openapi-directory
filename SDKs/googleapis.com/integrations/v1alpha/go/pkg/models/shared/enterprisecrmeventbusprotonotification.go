package shared

type EnterpriseCrmEventbusProtoNotification struct {
	BuganizerNotification *EnterpriseCrmEventbusProtoBuganizerNotification   `json:"buganizerNotification"`
	EmailAddress          *EnterpriseCrmEventbusProtoAddress                 `json:"emailAddress"`
	EscalatorQueue        *string                                            `json:"escalatorQueue"`
	PubsubTopic           *string                                            `json:"pubsubTopic"`
	Request               *EnterpriseCrmEventbusProtoCustomSuspensionRequest `json:"request"`
}
