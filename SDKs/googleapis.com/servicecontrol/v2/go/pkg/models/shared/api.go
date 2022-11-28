package shared

// API
// This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.
type API struct {
	Operation *string `json:"operation,omitempty"`
	Protocol  *string `json:"protocol,omitempty"`
	Service   *string `json:"service,omitempty"`
	Version   *string `json:"version,omitempty"`
}
