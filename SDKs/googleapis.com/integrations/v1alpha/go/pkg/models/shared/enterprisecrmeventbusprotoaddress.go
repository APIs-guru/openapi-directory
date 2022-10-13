package shared

type EnterpriseCrmEventbusProtoAddress struct {
	Email  *string                           `json:"email"`
	Name   *string                           `json:"name"`
	Tokens []EnterpriseCrmEventbusProtoToken `json:"tokens"`
}
