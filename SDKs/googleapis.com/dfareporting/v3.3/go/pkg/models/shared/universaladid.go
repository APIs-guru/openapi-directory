package shared

type UniversalAdIDRegistryEnum string

const (
	UniversalAdIDRegistryEnumOther     UniversalAdIDRegistryEnum = "OTHER"
	UniversalAdIDRegistryEnumAdIDOrg   UniversalAdIDRegistryEnum = "AD_ID.ORG"
	UniversalAdIDRegistryEnumClearcast UniversalAdIDRegistryEnum = "CLEARCAST"
	UniversalAdIDRegistryEnumDcm       UniversalAdIDRegistryEnum = "DCM"
)

// UniversalAdID
// A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
type UniversalAdID struct {
	Registry *UniversalAdIDRegistryEnum `json:"registry,omitempty"`
	Value    *string                    `json:"value,omitempty"`
}
