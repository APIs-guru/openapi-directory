package shared



type JobTemplate struct {
    Config *JobConfig `json:"config,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

