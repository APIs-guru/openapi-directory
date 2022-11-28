package shared

type DicomTagConfigProfileTypeEnum string

const (
	DicomTagConfigProfileTypeEnumProfileTypeUnspecified               DicomTagConfigProfileTypeEnum = "PROFILE_TYPE_UNSPECIFIED"
	DicomTagConfigProfileTypeEnumMinimalKeepListProfile               DicomTagConfigProfileTypeEnum = "MINIMAL_KEEP_LIST_PROFILE"
	DicomTagConfigProfileTypeEnumAttributeConfidentialityBasicProfile DicomTagConfigProfileTypeEnum = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE"
	DicomTagConfigProfileTypeEnumKeepAllProfile                       DicomTagConfigProfileTypeEnum = "KEEP_ALL_PROFILE"
	DicomTagConfigProfileTypeEnumDeidentifyTagContents                DicomTagConfigProfileTypeEnum = "DEIDENTIFY_TAG_CONTENTS"
)

// DicomTagConfig
// Specifies the parameters needed for the de-identification of DICOM stores.
type DicomTagConfig struct {
	Actions     []Action                       `json:"actions,omitempty"`
	Options     *Options                       `json:"options,omitempty"`
	ProfileType *DicomTagConfigProfileTypeEnum `json:"profileType,omitempty"`
}
