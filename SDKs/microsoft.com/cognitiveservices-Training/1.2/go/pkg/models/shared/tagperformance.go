package shared



type TagPerformance struct {
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    Precision *float64 `json:"Precision,omitempty"`
    PrecisionStdDeviation *float64 `json:"PrecisionStdDeviation,omitempty"`
    Recall *float64 `json:"Recall,omitempty"`
    RecallStdDeviation *float64 `json:"RecallStdDeviation,omitempty"`
    
}

