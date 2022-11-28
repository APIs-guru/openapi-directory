package shared

// LookupStreamObjectRequest
// Request for looking up a specific stream object by its source object identifier.
type LookupStreamObjectRequest struct {
	SourceObjectIdentifier *SourceObjectIdentifier `json:"sourceObjectIdentifier,omitempty"`
}
