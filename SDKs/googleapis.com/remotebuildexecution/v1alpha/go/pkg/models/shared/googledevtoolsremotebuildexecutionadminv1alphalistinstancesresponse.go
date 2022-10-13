package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse struct {
	Instances   []GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance `json:"instances"`
	Unreachable []string                                                 `json:"unreachable"`
}
