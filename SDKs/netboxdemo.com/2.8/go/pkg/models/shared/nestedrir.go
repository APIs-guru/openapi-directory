package shared



type NestedRir struct {
    AggregateCount *int64 `json:"aggregate_count,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Slug string `json:"slug"`
    URL *string `json:"url,omitempty"`
    
}

