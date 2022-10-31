package shared



type ParametersRow struct {
    Description string `json:"description"`
    DisplayName string `json:"displayName"`
    ID int64 `json:"id"`
    IsCore *bool `json:"isCore,omitempty"`
    MaxColorValue *float64 `json:"maxColorValue,omitempty"`
    Name string `json:"name"`
    PreferredUnit string `json:"preferredUnit"`
    
}

