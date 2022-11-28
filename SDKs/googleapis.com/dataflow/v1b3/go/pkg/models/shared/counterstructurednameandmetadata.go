package shared

// CounterStructuredNameAndMetadata
// A single message which encapsulates structured name and metadata for a given counter.
type CounterStructuredNameAndMetadata struct {
	Metadata *CounterMetadata       `json:"metadata,omitempty"`
	Name     *CounterStructuredName `json:"name,omitempty"`
}
