package shared

type Error struct {
	Category      string
	Context       map[string][]string
	CorrelationID string
	Errors        []ErrorDetail
	Links         map[string]string
	Message       string
	SubCategory   *string
}
