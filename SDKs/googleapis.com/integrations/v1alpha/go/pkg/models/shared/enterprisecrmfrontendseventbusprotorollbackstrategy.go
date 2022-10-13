package shared

type EnterpriseCrmFrontendsEventbusProtoRollbackStrategy struct {
	Parameters                          *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"parameters"`
	RollbackTaskImplementationClassName *string                                             `json:"rollbackTaskImplementationClassName"`
	TaskNumbersToRollback               []string                                            `json:"taskNumbersToRollback"`
}
