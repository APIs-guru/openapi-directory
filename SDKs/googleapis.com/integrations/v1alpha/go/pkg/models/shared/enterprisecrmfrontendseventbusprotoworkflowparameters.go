package shared

// EnterpriseCrmFrontendsEventbusProtoWorkflowParameters
// LINT.IfChange This is the frontend version of WorkflowParameters. It's exactly like the backend version except that instead of flattening protobuf parameters and treating every field and subfield of a protobuf parameter as a separate parameter, the fields/subfields of a protobuf parameter will be nested as "children" (see 'children' field below) parameters of the parent parameter. Please refer to enterprise/crm/eventbus/proto/workflow_parameters.proto for more information about WorkflowParameters.
type EnterpriseCrmFrontendsEventbusProtoWorkflowParameters struct {
	Parameters []EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry `json:"parameters,omitempty"`
}
