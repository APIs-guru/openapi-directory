package shared

type BillAction struct {
	Classification []string     `json:"classification"`
	Date           string       `json:"date"`
	Description    string       `json:"description"`
	Order          int64        `json:"order"`
	Organization   Organization `json:"organization"`
}
