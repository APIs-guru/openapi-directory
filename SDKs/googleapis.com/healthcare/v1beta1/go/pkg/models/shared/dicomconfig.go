package shared




type DicomConfigFilterProfileEnum string

const (
    DicomConfigFilterProfileEnumTagFilterProfileUnspecified DicomConfigFilterProfileEnum = "TAG_FILTER_PROFILE_UNSPECIFIED"
DicomConfigFilterProfileEnumMinimalKeepListProfile DicomConfigFilterProfileEnum = "MINIMAL_KEEP_LIST_PROFILE"
DicomConfigFilterProfileEnumAttributeConfidentialityBasicProfile DicomConfigFilterProfileEnum = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE"
DicomConfigFilterProfileEnumKeepAllProfile DicomConfigFilterProfileEnum = "KEEP_ALL_PROFILE"
DicomConfigFilterProfileEnumDeidentifyTagContents DicomConfigFilterProfileEnum = "DEIDENTIFY_TAG_CONTENTS"
)


type DicomConfig struct {
    FilterProfile *DicomConfigFilterProfileEnum `json:"filterProfile,omitempty"`
    KeepList *TagFilterList `json:"keepList,omitempty"`
    RemoveList *TagFilterList `json:"removeList,omitempty"`
    SkipIDRedaction *bool `json:"skipIdRedaction,omitempty"`
    
}

