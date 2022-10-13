package shared

type EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum string

const (
	EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnumUnknownType   EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum = "UNKNOWN_TYPE"
	EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnumTaskConfig    EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum = "TASK_CONFIG"
	EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnumTriggerConfig EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum = "TRIGGER_CONFIG"
)

type EnterpriseCrmEventbusProtoNodeIdentifier struct {
	ElementIdentifier *string                                                  `json:"elementIdentifier"`
	ElementType       *EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum `json:"elementType"`
}
