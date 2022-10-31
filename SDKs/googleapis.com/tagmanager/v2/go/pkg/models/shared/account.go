package shared



type Account struct {
    AccountID *string `json:"accountId,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    Name *string `json:"name,omitempty"`
    Path *string `json:"path,omitempty"`
    ShareData *bool `json:"shareData,omitempty"`
    TagManagerURL *string `json:"tagManagerUrl,omitempty"`
    
}

