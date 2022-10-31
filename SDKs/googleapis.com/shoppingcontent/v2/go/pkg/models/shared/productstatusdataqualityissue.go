package shared



type ProductStatusDataQualityIssue struct {
    Destination *string `json:"destination,omitempty"`
    Detail *string `json:"detail,omitempty"`
    FetchStatus *string `json:"fetchStatus,omitempty"`
    ID *string `json:"id,omitempty"`
    Location *string `json:"location,omitempty"`
    Severity *string `json:"severity,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    ValueOnLandingPage *string `json:"valueOnLandingPage,omitempty"`
    ValueProvided *string `json:"valueProvided,omitempty"`
    
}

