package shared

type OmidAssignedTargetingOptionDetailsOmidEnum string

const (
	OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified         OmidAssignedTargetingOptionDetailsOmidEnum = "OMID_UNSPECIFIED"
	OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds OmidAssignedTargetingOptionDetailsOmidEnum = "OMID_FOR_MOBILE_DISPLAY_ADS"
)

// OmidAssignedTargetingOptionDetails
// Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.
type OmidAssignedTargetingOptionDetails struct {
	Omid              *OmidAssignedTargetingOptionDetailsOmidEnum `json:"omid,omitempty"`
	TargetingOptionID *string                                     `json:"targetingOptionId,omitempty"`
}
