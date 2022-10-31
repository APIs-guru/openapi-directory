package shared



type CommitResponse struct {
    CommitTime *string `json:"commitTime,omitempty"`
    IndexUpdates *int32 `json:"indexUpdates,omitempty"`
    MutationResults []MutationResult `json:"mutationResults,omitempty"`
    
}

