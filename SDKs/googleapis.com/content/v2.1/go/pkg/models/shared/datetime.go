package shared



type DateTime struct {
    Day *int32 `json:"day,omitempty"`
    Hours *int32 `json:"hours,omitempty"`
    Minutes *int32 `json:"minutes,omitempty"`
    Month *int32 `json:"month,omitempty"`
    Nanos *int32 `json:"nanos,omitempty"`
    Seconds *int32 `json:"seconds,omitempty"`
    TimeZone *TimeZone `json:"timeZone,omitempty"`
    UtcOffset *string `json:"utcOffset,omitempty"`
    Year *int32 `json:"year,omitempty"`
    
}

