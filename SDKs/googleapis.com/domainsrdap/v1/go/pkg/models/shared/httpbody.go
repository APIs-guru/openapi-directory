package shared



type HTTPBody struct {
    ContentType *string `json:"contentType,omitempty"`
    Data *string `json:"data,omitempty"`
    Extensions []map[string]interface{} `json:"extensions,omitempty"`
    
}

