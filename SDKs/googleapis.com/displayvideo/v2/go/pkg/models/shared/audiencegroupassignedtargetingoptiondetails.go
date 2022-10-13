package shared

type AudienceGroupAssignedTargetingOptionDetails struct {
	ExcludedFirstAndThirdPartyAudienceGroup  *FirstAndThirdPartyAudienceGroup  `json:"excludedFirstAndThirdPartyAudienceGroup"`
	ExcludedGoogleAudienceGroup              *GoogleAudienceGroup              `json:"excludedGoogleAudienceGroup"`
	IncludedCombinedAudienceGroup            *CombinedAudienceGroup            `json:"includedCombinedAudienceGroup"`
	IncludedCustomListGroup                  *CustomListGroup                  `json:"includedCustomListGroup"`
	IncludedFirstAndThirdPartyAudienceGroups []FirstAndThirdPartyAudienceGroup `json:"includedFirstAndThirdPartyAudienceGroups"`
	IncludedGoogleAudienceGroup              *GoogleAudienceGroup              `json:"includedGoogleAudienceGroup"`
}
