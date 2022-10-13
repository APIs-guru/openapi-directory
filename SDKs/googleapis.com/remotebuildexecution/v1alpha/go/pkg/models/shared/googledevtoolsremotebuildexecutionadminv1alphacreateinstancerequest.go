package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest struct {
	Instance   *GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance `json:"instance"`
	InstanceID *string                                                 `json:"instanceId"`
	Parent     *string                                                 `json:"parent"`
}
