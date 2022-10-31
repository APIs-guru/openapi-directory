package shared



type AccountStatusDataQualityIssue struct {
    Country *string `json:"country,omitempty"`
    Destination *string `json:"destination,omitempty"`
    Detail *string `json:"detail,omitempty"`
    DisplayedValue *string `json:"displayedValue,omitempty"`
    ExampleItems []AccountStatusExampleItem `json:"exampleItems,omitempty"`
    ID *string `json:"id,omitempty"`
    LastChecked *string `json:"lastChecked,omitempty"`
    Location *string `json:"location,omitempty"`
    NumItems *int64 `json:"numItems,omitempty"`
    Severity *string `json:"severity,omitempty"`
    SubmittedValue *string `json:"submittedValue,omitempty"`
    
}

