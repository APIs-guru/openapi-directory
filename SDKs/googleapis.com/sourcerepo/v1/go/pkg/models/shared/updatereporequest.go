package shared



type UpdateRepoRequest struct {
    Repo *Repo `json:"repo,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

