package shared

type EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum string

const (
	EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnumUnknownType   EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum = "UNKNOWN_TYPE"
	EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnumTaskConfig    EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum = "TASK_CONFIG"
	EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnumTriggerConfig EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum = "TRIGGER_CONFIG"
)

// EnterpriseCrmEventbusProtoNodeIdentifier
// Represents a node identifier (type + id). Next highest id: 3
type EnterpriseCrmEventbusProtoNodeIdentifier struct {
	ElementIdentifier *string                                                  `json:"elementIdentifier,omitempty"`
	ElementType       *EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum `json:"elementType,omitempty"`
}
