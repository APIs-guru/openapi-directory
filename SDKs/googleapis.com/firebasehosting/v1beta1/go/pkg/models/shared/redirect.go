package shared



type Redirect struct {
    Glob *string `json:"glob,omitempty"`
    Location *string `json:"location,omitempty"`
    Regex *string `json:"regex,omitempty"`
    StatusCode *int32 `json:"statusCode,omitempty"`
    
}

