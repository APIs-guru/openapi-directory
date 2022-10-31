package shared

type UniversalAdIDRegistryEnum string

const (
	UniversalAdIDRegistryEnumOther        UniversalAdIDRegistryEnum = "OTHER"
	UniversalAdIDRegistryEnumAdIDOfficial UniversalAdIDRegistryEnum = "AD_ID_OFFICIAL"
	UniversalAdIDRegistryEnumClearcast    UniversalAdIDRegistryEnum = "CLEARCAST"
	UniversalAdIDRegistryEnumDcm          UniversalAdIDRegistryEnum = "DCM"
)

type UniversalAdID struct {
	Registry *UniversalAdIDRegistryEnum `json:"registry,omitempty"`
	Value    *string                    `json:"value,omitempty"`
}
