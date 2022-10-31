package shared



type Webfont struct {
    Category *string `json:"category,omitempty"`
    Family *string `json:"family,omitempty"`
    Files map[string]string `json:"files,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LastModified *string `json:"lastModified,omitempty"`
    Subsets []string `json:"subsets,omitempty"`
    Variants []string `json:"variants,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

