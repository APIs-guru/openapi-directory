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

type GoogleChromeManagementV1InstalledApp struct {
	AppID              *string                                                 `json:"appId"`
	AppInstallType     *GoogleChromeManagementV1InstalledAppAppInstallTypeEnum `json:"appInstallType"`
	AppSource          *GoogleChromeManagementV1InstalledAppAppSourceEnum      `json:"appSource"`
	AppType            *GoogleChromeManagementV1InstalledAppAppTypeEnum        `json:"appType"`
	BrowserDeviceCount *string                                                 `json:"browserDeviceCount"`
	Description        *string                                                 `json:"description"`
	Disabled           *bool                                                   `json:"disabled"`
	DisplayName        *string                                                 `json:"displayName"`
	HomepageURI        *string                                                 `json:"homepageUri"`
	OsUserCount        *string                                                 `json:"osUserCount"`
	Permissions        []string                                                `json:"permissions"`
}
