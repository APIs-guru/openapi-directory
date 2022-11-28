package shared

// EnterpriseCrmEventbusProtoAddress
// Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes.
type EnterpriseCrmEventbusProtoAddress struct {
	Email  *string                           `json:"email,omitempty"`
	Name   *string                           `json:"name,omitempty"`
	Tokens []EnterpriseCrmEventbusProtoToken `json:"tokens,omitempty"`
}
