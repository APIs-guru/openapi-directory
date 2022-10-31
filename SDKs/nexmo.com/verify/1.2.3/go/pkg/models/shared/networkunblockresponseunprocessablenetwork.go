package shared



type NetworkUnblockResponseUnprocessableNetworkInvalidParameters struct {
    Name *string `json:"name,omitempty"`
    Reason *string `json:"reason,omitempty"`
    
}

type NetworkUnblockResponseUnprocessableNetwork struct {
    Detail *string `json:"detail,omitempty"`
    Instance *string `json:"instance,omitempty"`
    InvalidParameters []NetworkUnblockResponseUnprocessableNetworkInvalidParameters `json:"invalid_parameters,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

