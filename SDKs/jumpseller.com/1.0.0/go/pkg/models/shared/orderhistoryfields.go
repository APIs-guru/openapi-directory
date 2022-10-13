package shared

type OrderHistoryFields struct {
	CreatedAt *string `json:"created_at"`
	ID        *int32  `json:"id"`
	Message   *string `json:"message"`
}
