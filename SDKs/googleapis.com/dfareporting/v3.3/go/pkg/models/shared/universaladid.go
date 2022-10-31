package shared




type UniversalAdIDRegistryEnum string

const (
    UniversalAdIDRegistryEnumOther UniversalAdIDRegistryEnum = "OTHER"
UniversalAdIDRegistryEnumAdIDOrg UniversalAdIDRegistryEnum = "AD_ID.ORG"
UniversalAdIDRegistryEnumClearcast UniversalAdIDRegistryEnum = "CLEARCAST"
UniversalAdIDRegistryEnumDcm UniversalAdIDRegistryEnum = "DCM"
)


type UniversalAdID struct {
    Registry *UniversalAdIDRegistryEnum `json:"registry,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

