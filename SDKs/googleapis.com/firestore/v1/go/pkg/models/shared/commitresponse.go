package shared



type CommitResponse struct {
    CommitTime *string `json:"commitTime,omitempty"`
    WriteResults []WriteResult `json:"writeResults,omitempty"`
    
}

