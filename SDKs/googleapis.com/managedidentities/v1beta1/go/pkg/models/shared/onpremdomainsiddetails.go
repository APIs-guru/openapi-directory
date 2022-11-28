package shared

type OnPremDomainSidDetailsSidFilteringStateEnum string

const (
	OnPremDomainSidDetailsSidFilteringStateEnumSidFilteringStateUnspecified OnPremDomainSidDetailsSidFilteringStateEnum = "SID_FILTERING_STATE_UNSPECIFIED"
	OnPremDomainSidDetailsSidFilteringStateEnumEnabled                      OnPremDomainSidDetailsSidFilteringStateEnum = "ENABLED"
	OnPremDomainSidDetailsSidFilteringStateEnumDisabled                     OnPremDomainSidDetailsSidFilteringStateEnum = "DISABLED"
)

// OnPremDomainSidDetails
// OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
type OnPremDomainSidDetails struct {
	Name              *string                                      `json:"name,omitempty"`
	SidFilteringState *OnPremDomainSidDetailsSidFilteringStateEnum `json:"sidFilteringState,omitempty"`
}
