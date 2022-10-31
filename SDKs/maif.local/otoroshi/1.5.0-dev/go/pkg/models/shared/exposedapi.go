package shared



type ExposedAPI struct {
    ExposeAPI bool `json:"exposeApi"`
    OpenAPIDescriptorURL *string `json:"openApiDescriptorUrl,omitempty"`
    
}

