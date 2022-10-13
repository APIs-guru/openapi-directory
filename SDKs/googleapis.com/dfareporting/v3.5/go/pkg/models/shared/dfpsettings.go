package shared

type DfpSettings struct {
	DfpNetworkCode                *string `json:"dfpNetworkCode"`
	DfpNetworkName                *string `json:"dfpNetworkName"`
	ProgrammaticPlacementAccepted *bool   `json:"programmaticPlacementAccepted"`
	PubPaidPlacementAccepted      *bool   `json:"pubPaidPlacementAccepted"`
	PublisherPortalOnly           *bool   `json:"publisherPortalOnly"`
}
