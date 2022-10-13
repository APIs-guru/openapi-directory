package shared

type GetGuestAttributesRequest struct {
	QueryPath *string  `json:"queryPath"`
	WorkerIds []string `json:"workerIds"`
}
