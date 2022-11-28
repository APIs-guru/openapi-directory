package shared

// LookupResponse
// The response for Datastore.Lookup.
type LookupResponse struct {
	Deferred []Key          `json:"deferred,omitempty"`
	Found    []EntityResult `json:"found,omitempty"`
	Missing  []EntityResult `json:"missing,omitempty"`
	ReadTime *string        `json:"readTime,omitempty"`
}
