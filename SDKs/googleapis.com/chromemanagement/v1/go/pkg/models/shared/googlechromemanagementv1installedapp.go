package shared

type GoogleChromeManagementV1InstalledAppAppInstallTypeEnum string

const (
	GoogleChromeManagementV1InstalledAppAppInstallTypeEnumAppInstallTypeUnspecified GoogleChromeManagementV1InstalledAppAppInstallTypeEnum = "APP_INSTALL_TYPE_UNSPECIFIED"
	GoogleChromeManagementV1InstalledAppAppInstallTypeEnumMultiple                  GoogleChromeManagementV1InstalledAppAppInstallTypeEnum = "MULTIPLE"
	GoogleChromeManagementV1InstalledAppAppInstallTypeEnumNormal                    GoogleChromeManagementV1InstalledAppAppInstallTypeEnum = "NORMAL"
	GoogleChromeManagementV1InstalledAppAppInstallTypeEnumAdmin                     GoogleChromeManagementV1InstalledAppAppInstallTypeEnum = "ADMIN"
	GoogleChromeManagementV1InstalledAppAppInstallTypeEnumDevelopment               GoogleChromeManagementV1InstalledAppAppInstallTypeEnum = "DEVELOPMENT"
	GoogleChromeManagementV1InstalledAppAppInstallTypeEnumSideload                  GoogleChromeManagementV1InstalledAppAppInstallTypeEnum = "SIDELOAD"
	GoogleChromeManagementV1InstalledAppAppInstallTypeEnumOther                     GoogleChromeManagementV1InstalledAppAppInstallTypeEnum = "OTHER"
)

type GoogleChromeManagementV1InstalledAppAppSourceEnum string

const (
	GoogleChromeManagementV1InstalledAppAppSourceEnumAppSourceUnspecified GoogleChromeManagementV1InstalledAppAppSourceEnum = "APP_SOURCE_UNSPECIFIED"
	GoogleChromeManagementV1InstalledAppAppSourceEnumChromeWebstore       GoogleChromeManagementV1InstalledAppAppSourceEnum = "CHROME_WEBSTORE"
	GoogleChromeManagementV1InstalledAppAppSourceEnumPlayStore            GoogleChromeManagementV1InstalledAppAppSourceEnum = "PLAY_STORE"
)

type GoogleChromeManagementV1InstalledAppAppTypeEnum string

const (
	GoogleChromeManagementV1InstalledAppAppTypeEnumAppTypeUnspecified GoogleChromeManagementV1InstalledAppAppTypeEnum = "APP_TYPE_UNSPECIFIED"
	GoogleChromeManagementV1InstalledAppAppTypeEnumExtension          GoogleChromeManagementV1InstalledAppAppTypeEnum = "EXTENSION"
	GoogleChromeManagementV1InstalledAppAppTypeEnumApp                GoogleChromeManagementV1InstalledAppAppTypeEnum = "APP"
	GoogleChromeManagementV1InstalledAppAppTypeEnumTheme              GoogleChromeManagementV1InstalledAppAppTypeEnum = "THEME"
	GoogleChromeManagementV1InstalledAppAppTypeEnumHostedApp          GoogleChromeManagementV1InstalledAppAppTypeEnum = "HOSTED_APP"
	GoogleChromeManagementV1InstalledAppAppTypeEnumAndroidApp         GoogleChromeManagementV1InstalledAppAppTypeEnum = "ANDROID_APP"
)

// GoogleChromeManagementV1InstalledApp
// Describes an installed app.
type GoogleChromeManagementV1InstalledApp struct {
	AppID              *string                                                 `json:"appId,omitempty"`
	AppInstallType     *GoogleChromeManagementV1InstalledAppAppInstallTypeEnum `json:"appInstallType,omitempty"`
	AppSource          *GoogleChromeManagementV1InstalledAppAppSourceEnum      `json:"appSource,omitempty"`
	AppType            *GoogleChromeManagementV1InstalledAppAppTypeEnum        `json:"appType,omitempty"`
	BrowserDeviceCount *string                                                 `json:"browserDeviceCount,omitempty"`
	Description        *string                                                 `json:"description,omitempty"`
	Disabled           *bool                                                   `json:"disabled,omitempty"`
	DisplayName        *string                                                 `json:"displayName,omitempty"`
	HomepageURI        *string                                                 `json:"homepageUri,omitempty"`
	OsUserCount        *string                                                 `json:"osUserCount,omitempty"`
	Permissions        []string                                                `json:"permissions,omitempty"`
}
