package shared

type DatedValue struct {
	Date  *Date   `json:"date"`
	Value *string `json:"value"`
}
