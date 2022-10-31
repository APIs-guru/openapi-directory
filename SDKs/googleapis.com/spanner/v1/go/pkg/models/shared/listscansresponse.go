package shared



type ListScansResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Scans []Scan `json:"scans,omitempty"`
    
}

