package shared

type AudienceGroupAssignedTargetingOptionDetails struct {
	ExcludedFirstAndThirdPartyAudienceGroup  *FirstAndThirdPartyAudienceGroup  `json:"excludedFirstAndThirdPartyAudienceGroup,omitempty"`
	ExcludedGoogleAudienceGroup              *GoogleAudienceGroup              `json:"excludedGoogleAudienceGroup,omitempty"`
	IncludedCombinedAudienceGroup            *CombinedAudienceGroup            `json:"includedCombinedAudienceGroup,omitempty"`
	IncludedCustomListGroup                  *CustomListGroup                  `json:"includedCustomListGroup,omitempty"`
	IncludedFirstAndThirdPartyAudienceGroups []FirstAndThirdPartyAudienceGroup `json:"includedFirstAndThirdPartyAudienceGroups,omitempty"`
	IncludedGoogleAudienceGroup              *GoogleAudienceGroup              `json:"includedGoogleAudienceGroup,omitempty"`
}
