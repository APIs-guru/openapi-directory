package shared

type BadRequest struct {
	Hints   []ErrorMessage `json:"hints,omitempty"`
	Message *string        `json:"message,omitempty"`
	Status  *string        `json:"status,omitempty"`
}
