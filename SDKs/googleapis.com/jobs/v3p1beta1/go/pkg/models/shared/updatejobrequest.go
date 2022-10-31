package shared



type UpdateJobRequest struct {
    Job *Job `json:"job,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

