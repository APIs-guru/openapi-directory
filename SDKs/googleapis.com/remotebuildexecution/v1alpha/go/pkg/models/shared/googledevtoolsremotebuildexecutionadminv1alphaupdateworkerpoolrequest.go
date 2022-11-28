package shared

// GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest
// The request used for UpdateWorkerPool.
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest struct {
	UpdateMask *string                                                   `json:"updateMask,omitempty"`
	WorkerPool *GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool `json:"workerPool,omitempty"`
}
