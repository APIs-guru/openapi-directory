package shared

type OmidTargetingOptionDetailsOmidEnum string

const (
	OmidTargetingOptionDetailsOmidEnumOmidUnspecified         OmidTargetingOptionDetailsOmidEnum = "OMID_UNSPECIFIED"
	OmidTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds OmidTargetingOptionDetailsOmidEnum = "OMID_FOR_MOBILE_DISPLAY_ADS"
)

// OmidTargetingOptionDetails
// Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`.
type OmidTargetingOptionDetails struct {
	Omid *OmidTargetingOptionDetailsOmidEnum `json:"omid,omitempty"`
}
