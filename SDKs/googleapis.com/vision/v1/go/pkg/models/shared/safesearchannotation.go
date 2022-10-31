package shared

type SafeSearchAnnotationAdultEnum string

const (
	SafeSearchAnnotationAdultEnumUnknown      SafeSearchAnnotationAdultEnum = "UNKNOWN"
	SafeSearchAnnotationAdultEnumVeryUnlikely SafeSearchAnnotationAdultEnum = "VERY_UNLIKELY"
	SafeSearchAnnotationAdultEnumUnlikely     SafeSearchAnnotationAdultEnum = "UNLIKELY"
	SafeSearchAnnotationAdultEnumPossible     SafeSearchAnnotationAdultEnum = "POSSIBLE"
	SafeSearchAnnotationAdultEnumLikely       SafeSearchAnnotationAdultEnum = "LIKELY"
	SafeSearchAnnotationAdultEnumVeryLikely   SafeSearchAnnotationAdultEnum = "VERY_LIKELY"
)

type SafeSearchAnnotationMedicalEnum string

const (
	SafeSearchAnnotationMedicalEnumUnknown      SafeSearchAnnotationMedicalEnum = "UNKNOWN"
	SafeSearchAnnotationMedicalEnumVeryUnlikely SafeSearchAnnotationMedicalEnum = "VERY_UNLIKELY"
	SafeSearchAnnotationMedicalEnumUnlikely     SafeSearchAnnotationMedicalEnum = "UNLIKELY"
	SafeSearchAnnotationMedicalEnumPossible     SafeSearchAnnotationMedicalEnum = "POSSIBLE"
	SafeSearchAnnotationMedicalEnumLikely       SafeSearchAnnotationMedicalEnum = "LIKELY"
	SafeSearchAnnotationMedicalEnumVeryLikely   SafeSearchAnnotationMedicalEnum = "VERY_LIKELY"
)

type SafeSearchAnnotationRacyEnum string

const (
	SafeSearchAnnotationRacyEnumUnknown      SafeSearchAnnotationRacyEnum = "UNKNOWN"
	SafeSearchAnnotationRacyEnumVeryUnlikely SafeSearchAnnotationRacyEnum = "VERY_UNLIKELY"
	SafeSearchAnnotationRacyEnumUnlikely     SafeSearchAnnotationRacyEnum = "UNLIKELY"
	SafeSearchAnnotationRacyEnumPossible     SafeSearchAnnotationRacyEnum = "POSSIBLE"
	SafeSearchAnnotationRacyEnumLikely       SafeSearchAnnotationRacyEnum = "LIKELY"
	SafeSearchAnnotationRacyEnumVeryLikely   SafeSearchAnnotationRacyEnum = "VERY_LIKELY"
)

type SafeSearchAnnotationSpoofEnum string

const (
	SafeSearchAnnotationSpoofEnumUnknown      SafeSearchAnnotationSpoofEnum = "UNKNOWN"
	SafeSearchAnnotationSpoofEnumVeryUnlikely SafeSearchAnnotationSpoofEnum = "VERY_UNLIKELY"
	SafeSearchAnnotationSpoofEnumUnlikely     SafeSearchAnnotationSpoofEnum = "UNLIKELY"
	SafeSearchAnnotationSpoofEnumPossible     SafeSearchAnnotationSpoofEnum = "POSSIBLE"
	SafeSearchAnnotationSpoofEnumLikely       SafeSearchAnnotationSpoofEnum = "LIKELY"
	SafeSearchAnnotationSpoofEnumVeryLikely   SafeSearchAnnotationSpoofEnum = "VERY_LIKELY"
)

type SafeSearchAnnotationViolenceEnum string

const (
	SafeSearchAnnotationViolenceEnumUnknown      SafeSearchAnnotationViolenceEnum = "UNKNOWN"
	SafeSearchAnnotationViolenceEnumVeryUnlikely SafeSearchAnnotationViolenceEnum = "VERY_UNLIKELY"
	SafeSearchAnnotationViolenceEnumUnlikely     SafeSearchAnnotationViolenceEnum = "UNLIKELY"
	SafeSearchAnnotationViolenceEnumPossible     SafeSearchAnnotationViolenceEnum = "POSSIBLE"
	SafeSearchAnnotationViolenceEnumLikely       SafeSearchAnnotationViolenceEnum = "LIKELY"
	SafeSearchAnnotationViolenceEnumVeryLikely   SafeSearchAnnotationViolenceEnum = "VERY_LIKELY"
)

type SafeSearchAnnotation struct {
	Adult    *SafeSearchAnnotationAdultEnum    `json:"adult,omitempty"`
	Medical  *SafeSearchAnnotationMedicalEnum  `json:"medical,omitempty"`
	Racy     *SafeSearchAnnotationRacyEnum     `json:"racy,omitempty"`
	Spoof    *SafeSearchAnnotationSpoofEnum    `json:"spoof,omitempty"`
	Violence *SafeSearchAnnotationViolenceEnum `json:"violence,omitempty"`
}
