package shared

type OmidAssignedTargetingOptionDetailsOmidEnum string

const (
	OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified         OmidAssignedTargetingOptionDetailsOmidEnum = "OMID_UNSPECIFIED"
	OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds OmidAssignedTargetingOptionDetailsOmidEnum = "OMID_FOR_MOBILE_DISPLAY_ADS"
)

type OmidAssignedTargetingOptionDetails struct {
	Omid *OmidAssignedTargetingOptionDetailsOmidEnum `json:"omid"`
}
