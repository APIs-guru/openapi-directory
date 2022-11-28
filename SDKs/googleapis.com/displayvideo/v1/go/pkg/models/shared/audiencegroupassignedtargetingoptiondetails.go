package shared

// AudienceGroupAssignedTargetingOptionDetails
// Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
type AudienceGroupAssignedTargetingOptionDetails struct {
	ExcludedFirstAndThirdPartyAudienceGroup  *FirstAndThirdPartyAudienceGroup  `json:"excludedFirstAndThirdPartyAudienceGroup,omitempty"`
	ExcludedGoogleAudienceGroup              *GoogleAudienceGroup              `json:"excludedGoogleAudienceGroup,omitempty"`
	IncludedCombinedAudienceGroup            *CombinedAudienceGroup            `json:"includedCombinedAudienceGroup,omitempty"`
	IncludedCustomListGroup                  *CustomListGroup                  `json:"includedCustomListGroup,omitempty"`
	IncludedFirstAndThirdPartyAudienceGroups []FirstAndThirdPartyAudienceGroup `json:"includedFirstAndThirdPartyAudienceGroups,omitempty"`
	IncludedGoogleAudienceGroup              *GoogleAudienceGroup              `json:"includedGoogleAudienceGroup,omitempty"`
}
