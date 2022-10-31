package shared



type CounterStructuredNameAndMetadata struct {
    Metadata *CounterMetadata `json:"metadata,omitempty"`
    Name *CounterStructuredName `json:"name,omitempty"`
    
}

