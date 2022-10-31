package shared




type UniversalAdIDRegistryEnum string

const (
    UniversalAdIDRegistryEnumUniversalAdRegistryUnspecified UniversalAdIDRegistryEnum = "UNIVERSAL_AD_REGISTRY_UNSPECIFIED"
UniversalAdIDRegistryEnumUniversalAdRegistryOther UniversalAdIDRegistryEnum = "UNIVERSAL_AD_REGISTRY_OTHER"
UniversalAdIDRegistryEnumUniversalAdRegistryAdID UniversalAdIDRegistryEnum = "UNIVERSAL_AD_REGISTRY_AD_ID"
UniversalAdIDRegistryEnumUniversalAdRegistryClearcast UniversalAdIDRegistryEnum = "UNIVERSAL_AD_REGISTRY_CLEARCAST"
UniversalAdIDRegistryEnumUniversalAdRegistryDv360 UniversalAdIDRegistryEnum = "UNIVERSAL_AD_REGISTRY_DV360"
UniversalAdIDRegistryEnumUniversalAdRegistryCm UniversalAdIDRegistryEnum = "UNIVERSAL_AD_REGISTRY_CM"
)


type UniversalAdID struct {
    ID *string `json:"id,omitempty"`
    Registry *UniversalAdIDRegistryEnum `json:"registry,omitempty"`
    
}

