package shared

// Source
// Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, and other tools.
type Source struct {
	CanonicalName *string `json:"canonicalName,omitempty"`
	Description   *string `json:"description,omitempty"`
	DisplayName   *string `json:"displayName,omitempty"`
	Name          *string `json:"name,omitempty"`
}
