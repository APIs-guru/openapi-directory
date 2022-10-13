package shared

type Transaction struct {
	ID            *string `json:"id"`
	ReadTimestamp *string `json:"readTimestamp"`
}
