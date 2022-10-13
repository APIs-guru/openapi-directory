package shared

type GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum string

const (
	GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnumOsUnspecified   GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum = "OS_UNSPECIFIED"
	GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnumDesktopMac      GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum = "DESKTOP_MAC"
	GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnumDesktopWindows  GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum = "DESKTOP_WINDOWS"
	GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnumDesktopLinux    GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum = "DESKTOP_LINUX"
	GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnumDesktopChromeOs GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum = "DESKTOP_CHROME_OS"
	GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnumAndroid         GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum = "ANDROID"
	GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnumIos             GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum = "IOS"
)

type GoogleIdentityAccesscontextmanagerV1OsConstraint struct {
	MinimumVersion          *string                                                     `json:"minimumVersion"`
	OsType                  *GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum `json:"osType"`
	RequireVerifiedChromeOs *bool                                                       `json:"requireVerifiedChromeOs"`
}
