package shared

// EnterpriseCrmEventbusProtoCombinedCondition
// This message recursively combines constituent conditions using logical AND.
type EnterpriseCrmEventbusProtoCombinedCondition struct {
	Conditions []EnterpriseCrmEventbusProtoCondition `json:"conditions,omitempty"`
}
