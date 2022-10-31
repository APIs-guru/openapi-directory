package shared

type EnterpriseCrmFrontendsEventbusProtoRollbackStrategy struct {
	Parameters                          *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"parameters,omitempty"`
	RollbackTaskImplementationClassName *string                                             `json:"rollbackTaskImplementationClassName,omitempty"`
	TaskNumbersToRollback               []string                                            `json:"taskNumbersToRollback,omitempty"`
}
