package shared

type EnterpriseCrmEventbusProtoAddress struct {
	Email  *string                           `json:"email,omitempty"`
	Name   *string                           `json:"name,omitempty"`
	Tokens []EnterpriseCrmEventbusProtoToken `json:"tokens,omitempty"`
}
