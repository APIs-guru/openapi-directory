package shared



type ObjectConditions struct {
    ExcludePrefixes []string `json:"excludePrefixes,omitempty"`
    IncludePrefixes []string `json:"includePrefixes,omitempty"`
    LastModifiedBefore *string `json:"lastModifiedBefore,omitempty"`
    LastModifiedSince *string `json:"lastModifiedSince,omitempty"`
    MaxTimeElapsedSinceLastModification *string `json:"maxTimeElapsedSinceLastModification,omitempty"`
    MinTimeElapsedSinceLastModification *string `json:"minTimeElapsedSinceLastModification,omitempty"`
    
}

