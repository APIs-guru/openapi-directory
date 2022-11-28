package shared

// EnterpriseCrmFrontendsEventbusProtoRollbackStrategy
// Next available id: 4
type EnterpriseCrmFrontendsEventbusProtoRollbackStrategy struct {
	Parameters                          *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"parameters,omitempty"`
	RollbackTaskImplementationClassName *string                                             `json:"rollbackTaskImplementationClassName,omitempty"`
	TaskNumbersToRollback               []string                                            `json:"taskNumbersToRollback,omitempty"`
}
