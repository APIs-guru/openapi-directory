package shared



type DfpSettings struct {
    DfpNetworkCode *string `json:"dfpNetworkCode,omitempty"`
    DfpNetworkName *string `json:"dfpNetworkName,omitempty"`
    ProgrammaticPlacementAccepted *bool `json:"programmaticPlacementAccepted,omitempty"`
    PubPaidPlacementAccepted *bool `json:"pubPaidPlacementAccepted,omitempty"`
    PublisherPortalOnly *bool `json:"publisherPortalOnly,omitempty"`
    
}

