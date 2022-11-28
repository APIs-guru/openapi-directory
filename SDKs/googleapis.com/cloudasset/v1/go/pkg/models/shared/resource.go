package shared

// Resource
// A representation of a Google Cloud resource.
type Resource struct {
	Data                 map[string]interface{} `json:"data,omitempty"`
	DiscoveryDocumentURI *string                `json:"discoveryDocumentUri,omitempty"`
	DiscoveryName        *string                `json:"discoveryName,omitempty"`
	Location             *string                `json:"location,omitempty"`
	Parent               *string                `json:"parent,omitempty"`
	ResourceURL          *string                `json:"resourceUrl,omitempty"`
	Version              *string                `json:"version,omitempty"`
}
