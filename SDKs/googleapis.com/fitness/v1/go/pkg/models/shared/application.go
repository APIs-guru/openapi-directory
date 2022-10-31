package shared



type Application struct {
    DetailsURL *string `json:"detailsUrl,omitempty"`
    Name *string `json:"name,omitempty"`
    PackageName *string `json:"packageName,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

