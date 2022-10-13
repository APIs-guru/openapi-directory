package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest struct {
	Parent     *string                                                   `json:"parent"`
	PoolID     *string                                                   `json:"poolId"`
	WorkerPool *GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool `json:"workerPool"`
}
