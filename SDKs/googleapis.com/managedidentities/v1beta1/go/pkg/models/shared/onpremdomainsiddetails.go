package shared




type OnPremDomainSidDetailsSidFilteringStateEnum string

const (
    OnPremDomainSidDetailsSidFilteringStateEnumSidFilteringStateUnspecified OnPremDomainSidDetailsSidFilteringStateEnum = "SID_FILTERING_STATE_UNSPECIFIED"
OnPremDomainSidDetailsSidFilteringStateEnumEnabled OnPremDomainSidDetailsSidFilteringStateEnum = "ENABLED"
OnPremDomainSidDetailsSidFilteringStateEnumDisabled OnPremDomainSidDetailsSidFilteringStateEnum = "DISABLED"
)


type OnPremDomainSidDetails struct {
    Name *string `json:"name,omitempty"`
    SidFilteringState *OnPremDomainSidDetailsSidFilteringStateEnum `json:"sidFilteringState,omitempty"`
    
}

