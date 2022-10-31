package shared



type PartialResultSet struct {
    ChunkedValue *bool `json:"chunkedValue,omitempty"`
    Metadata *ResultSetMetadata `json:"metadata,omitempty"`
    ResumeToken *string `json:"resumeToken,omitempty"`
    Stats *ResultSetStats `json:"stats,omitempty"`
    Values []interface{} `json:"values,omitempty"`
    
}

