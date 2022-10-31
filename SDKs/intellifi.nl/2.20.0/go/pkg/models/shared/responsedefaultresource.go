package shared



type ResponseDefaultResourceResource struct {
    ID *string `json:"id,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ResponseDefaultResource struct {
    Resource *ResponseDefaultResourceResource `json:"resource,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}

