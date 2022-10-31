package shared



type BatchWriteResponse struct {
    Status []Status `json:"status,omitempty"`
    WriteResults []WriteResult `json:"writeResults,omitempty"`
    
}

