package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest struct {
	Parent     *string                                                   `json:"parent,omitempty"`
	PoolID     *string                                                   `json:"poolId,omitempty"`
	WorkerPool *GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool `json:"workerPool,omitempty"`
}
