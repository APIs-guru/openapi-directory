package shared

type DatedValue struct {
	Date  *Date   `json:"date,omitempty"`
	Value *string `json:"value,omitempty"`
}
