package shared



type IamPolicy struct {
    Bindings []Binding `json:"bindings,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Version *int32 `json:"version,omitempty"`
    
}

