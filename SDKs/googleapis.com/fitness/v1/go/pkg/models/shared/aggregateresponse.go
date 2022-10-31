package shared



type AggregateResponse struct {
    Bucket []AggregateBucket `json:"bucket,omitempty"`
    
}

