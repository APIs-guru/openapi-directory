package shared



type Rir struct {
    AggregateCount *int64 `json:"aggregate_count,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsPrivate *bool `json:"is_private,omitempty"`
    Name string `json:"name"`
    Slug string `json:"slug"`
    
}

