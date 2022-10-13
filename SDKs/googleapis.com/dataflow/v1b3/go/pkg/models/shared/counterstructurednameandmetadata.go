package shared

type CounterStructuredNameAndMetadata struct {
	Metadata *CounterMetadata       `json:"metadata"`
	Name     *CounterStructuredName `json:"name"`
}
