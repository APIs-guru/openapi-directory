package shared



type NetworkUnblockResponseInvalidDurationInvalidParameters struct {
    Name *string `json:"name,omitempty"`
    Reason *string `json:"reason,omitempty"`
    
}

type NetworkUnblockResponseInvalidDuration struct {
    Detail *string `json:"detail,omitempty"`
    Instance *string `json:"instance,omitempty"`
    InvalidParameters []NetworkUnblockResponseInvalidDurationInvalidParameters `json:"invalid_parameters,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

