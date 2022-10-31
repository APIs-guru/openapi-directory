package shared

type AppliedLicenseTypeEnum string

const (
	AppliedLicenseTypeEnumTypeUnspecified AppliedLicenseTypeEnum = "TYPE_UNSPECIFIED"
	AppliedLicenseTypeEnumNone            AppliedLicenseTypeEnum = "NONE"
	AppliedLicenseTypeEnumPayg            AppliedLicenseTypeEnum = "PAYG"
	AppliedLicenseTypeEnumByol            AppliedLicenseTypeEnum = "BYOL"
)

type AppliedLicense struct {
	OsLicense *string                 `json:"osLicense,omitempty"`
	Type      *AppliedLicenseTypeEnum `json:"type,omitempty"`
}
