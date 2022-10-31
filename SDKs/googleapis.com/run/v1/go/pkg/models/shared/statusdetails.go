package shared



type StatusDetails struct {
    Causes []StatusCause `json:"causes,omitempty"`
    Group *string `json:"group,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    RetryAfterSeconds *int32 `json:"retryAfterSeconds,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

