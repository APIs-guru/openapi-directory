package shared

type OmidTargetingOptionDetailsOmidEnum string

const (
	OmidTargetingOptionDetailsOmidEnumOmidUnspecified         OmidTargetingOptionDetailsOmidEnum = "OMID_UNSPECIFIED"
	OmidTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds OmidTargetingOptionDetailsOmidEnum = "OMID_FOR_MOBILE_DISPLAY_ADS"
)

type OmidTargetingOptionDetails struct {
	Omid *OmidTargetingOptionDetailsOmidEnum `json:"omid,omitempty"`
}
