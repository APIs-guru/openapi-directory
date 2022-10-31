package shared



type CreateTimeSeriesSummary struct {
    Errors []Error `json:"errors,omitempty"`
    SuccessPointCount *int32 `json:"successPointCount,omitempty"`
    TotalPointCount *int32 `json:"totalPointCount,omitempty"`
    
}

