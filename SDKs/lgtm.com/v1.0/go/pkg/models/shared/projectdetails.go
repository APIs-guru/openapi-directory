package shared



type ProjectDetails struct {
    ID *int64 `json:"id,omitempty"`
    Languages []ProjectLanguageStats `json:"languages,omitempty"`
    Name *string `json:"name,omitempty"`
    URL *string `json:"url,omitempty"`
    URLIdentifier *string `json:"url-identifier,omitempty"`
    
}

