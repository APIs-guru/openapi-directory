package shared

type PatientAuthPurposeEnum string

const (
	PatientAuthPurposeEnumLink       PatientAuthPurposeEnum = "LINK"
	PatientAuthPurposeEnumKyc        PatientAuthPurposeEnum = "KYC"
	PatientAuthPurposeEnumKycAndLink PatientAuthPurposeEnum = "KYC_AND_LINK"
)
