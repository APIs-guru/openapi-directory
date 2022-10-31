package shared



type NestedSecretRole struct {
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    SecretCount *int64 `json:"secret_count,omitempty"`
    Slug string `json:"slug"`
    URL *string `json:"url,omitempty"`
    
}

