package shared

type GetGuestAttributesRequest struct {
	QueryPath *string  `json:"queryPath,omitempty"`
	WorkerIds []string `json:"workerIds,omitempty"`
}
