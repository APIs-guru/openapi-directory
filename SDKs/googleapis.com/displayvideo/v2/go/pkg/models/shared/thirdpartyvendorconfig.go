package shared

type ThirdPartyVendorConfigVendorEnum string

const (
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorUnspecified       ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_UNSPECIFIED"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorMoat              ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_MOAT"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorDoubleVerify      ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_DOUBLE_VERIFY"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorIntegralAdScience ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorComscore          ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_COMSCORE"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorTelemetry         ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_TELEMETRY"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorMeetrics          ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_MEETRICS"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorZefr              ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_ZEFR"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorNielsen           ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_NIELSEN"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorKantar            ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_KANTAR"
	ThirdPartyVendorConfigVendorEnumThirdPartyVendorDynata            ThirdPartyVendorConfigVendorEnum = "THIRD_PARTY_VENDOR_DYNATA"
)

// ThirdPartyVendorConfig
// Settings that control how third-party measurement vendors are configured.
type ThirdPartyVendorConfig struct {
	PlacementID *string                           `json:"placementId,omitempty"`
	Vendor      *ThirdPartyVendorConfigVendorEnum `json:"vendor,omitempty"`
}
