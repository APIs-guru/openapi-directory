package shared

type SustainabilityCertificationsBreeamCertificationEnum string

const (
	SustainabilityCertificationsBreeamCertificationEnumBreeamCertificationUnspecified SustainabilityCertificationsBreeamCertificationEnum = "BREEAM_CERTIFICATION_UNSPECIFIED"
	SustainabilityCertificationsBreeamCertificationEnumNoBreeamCertification          SustainabilityCertificationsBreeamCertificationEnum = "NO_BREEAM_CERTIFICATION"
	SustainabilityCertificationsBreeamCertificationEnumBreeamPass                     SustainabilityCertificationsBreeamCertificationEnum = "BREEAM_PASS"
	SustainabilityCertificationsBreeamCertificationEnumBreeamGood                     SustainabilityCertificationsBreeamCertificationEnum = "BREEAM_GOOD"
	SustainabilityCertificationsBreeamCertificationEnumBreeamVeryGood                 SustainabilityCertificationsBreeamCertificationEnum = "BREEAM_VERY_GOOD"
	SustainabilityCertificationsBreeamCertificationEnumBreeamExcellent                SustainabilityCertificationsBreeamCertificationEnum = "BREEAM_EXCELLENT"
	SustainabilityCertificationsBreeamCertificationEnumBreeamOutstanding              SustainabilityCertificationsBreeamCertificationEnum = "BREEAM_OUTSTANDING"
)

type SustainabilityCertificationsBreeamCertificationExceptionEnum string

const (
	SustainabilityCertificationsBreeamCertificationExceptionEnumExceptionUnspecified SustainabilityCertificationsBreeamCertificationExceptionEnum = "EXCEPTION_UNSPECIFIED"
	SustainabilityCertificationsBreeamCertificationExceptionEnumUnderConstruction    SustainabilityCertificationsBreeamCertificationExceptionEnum = "UNDER_CONSTRUCTION"
	SustainabilityCertificationsBreeamCertificationExceptionEnumDependentOnSeason    SustainabilityCertificationsBreeamCertificationExceptionEnum = "DEPENDENT_ON_SEASON"
	SustainabilityCertificationsBreeamCertificationExceptionEnumDependentOnDayOfWeek SustainabilityCertificationsBreeamCertificationExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type SustainabilityCertificationsLeedCertificationEnum string

const (
	SustainabilityCertificationsLeedCertificationEnumLeedCertificationUnspecified SustainabilityCertificationsLeedCertificationEnum = "LEED_CERTIFICATION_UNSPECIFIED"
	SustainabilityCertificationsLeedCertificationEnumNoLeedCertification          SustainabilityCertificationsLeedCertificationEnum = "NO_LEED_CERTIFICATION"
	SustainabilityCertificationsLeedCertificationEnumLeedCertified                SustainabilityCertificationsLeedCertificationEnum = "LEED_CERTIFIED"
	SustainabilityCertificationsLeedCertificationEnumLeedSilver                   SustainabilityCertificationsLeedCertificationEnum = "LEED_SILVER"
	SustainabilityCertificationsLeedCertificationEnumLeedGold                     SustainabilityCertificationsLeedCertificationEnum = "LEED_GOLD"
	SustainabilityCertificationsLeedCertificationEnumLeedPlatinum                 SustainabilityCertificationsLeedCertificationEnum = "LEED_PLATINUM"
)

type SustainabilityCertificationsLeedCertificationExceptionEnum string

const (
	SustainabilityCertificationsLeedCertificationExceptionEnumExceptionUnspecified SustainabilityCertificationsLeedCertificationExceptionEnum = "EXCEPTION_UNSPECIFIED"
	SustainabilityCertificationsLeedCertificationExceptionEnumUnderConstruction    SustainabilityCertificationsLeedCertificationExceptionEnum = "UNDER_CONSTRUCTION"
	SustainabilityCertificationsLeedCertificationExceptionEnumDependentOnSeason    SustainabilityCertificationsLeedCertificationExceptionEnum = "DEPENDENT_ON_SEASON"
	SustainabilityCertificationsLeedCertificationExceptionEnumDependentOnDayOfWeek SustainabilityCertificationsLeedCertificationExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

// SustainabilityCertifications
// Sustainability certifications the hotel has been awarded.
type SustainabilityCertifications struct {
	BreeamCertification          *SustainabilityCertificationsBreeamCertificationEnum          `json:"breeamCertification,omitempty"`
	BreeamCertificationException *SustainabilityCertificationsBreeamCertificationExceptionEnum `json:"breeamCertificationException,omitempty"`
	EcoCertifications            []EcoCertification                                            `json:"ecoCertifications,omitempty"`
	LeedCertification            *SustainabilityCertificationsLeedCertificationEnum            `json:"leedCertification,omitempty"`
	LeedCertificationException   *SustainabilityCertificationsLeedCertificationExceptionEnum   `json:"leedCertificationException,omitempty"`
}
