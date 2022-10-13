package shared

type BadRequest struct {
	Hints   []ErrorMessage `json:"hints"`
	Message *string        `json:"message"`
	Status  *string        `json:"status"`
}
