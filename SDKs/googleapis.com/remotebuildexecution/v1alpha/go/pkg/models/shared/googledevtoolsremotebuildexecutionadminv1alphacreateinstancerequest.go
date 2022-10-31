package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest struct {
	Instance   *GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance `json:"instance,omitempty"`
	InstanceID *string                                                 `json:"instanceId,omitempty"`
	Parent     *string                                                 `json:"parent,omitempty"`
}
