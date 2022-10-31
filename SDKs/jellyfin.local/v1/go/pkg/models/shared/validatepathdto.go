package shared



type ValidatePathDto struct {
    IsFile *bool `json:"IsFile,omitempty"`
    Path *string `json:"Path,omitempty"`
    ValidateWritable *bool `json:"ValidateWritable,omitempty"`
    
}

