package shared

// ExposedAPI
// The Open API configuration for your service (if one)
type ExposedAPI struct {
	ExposeAPI            bool    `json:"exposeApi"`
	OpenAPIDescriptorURL *string `json:"openApiDescriptorUrl,omitempty"`
}
