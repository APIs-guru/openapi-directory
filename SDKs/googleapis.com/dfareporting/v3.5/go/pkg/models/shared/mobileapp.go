package shared

type MobileAppDirectoryEnum string

const (
	MobileAppDirectoryEnumUnknown              MobileAppDirectoryEnum = "UNKNOWN"
	MobileAppDirectoryEnumAppleAppStore        MobileAppDirectoryEnum = "APPLE_APP_STORE"
	MobileAppDirectoryEnumGooglePlayStore      MobileAppDirectoryEnum = "GOOGLE_PLAY_STORE"
	MobileAppDirectoryEnumRokuAppStore         MobileAppDirectoryEnum = "ROKU_APP_STORE"
	MobileAppDirectoryEnumAmazonFiretvAppStore MobileAppDirectoryEnum = "AMAZON_FIRETV_APP_STORE"
	MobileAppDirectoryEnumPlaystationAppStore  MobileAppDirectoryEnum = "PLAYSTATION_APP_STORE"
	MobileAppDirectoryEnumAppleTvAppStore      MobileAppDirectoryEnum = "APPLE_TV_APP_STORE"
	MobileAppDirectoryEnumXboxAppStore         MobileAppDirectoryEnum = "XBOX_APP_STORE"
	MobileAppDirectoryEnumSamsungTvAppStore    MobileAppDirectoryEnum = "SAMSUNG_TV_APP_STORE"
	MobileAppDirectoryEnumAndroidTvAppStore    MobileAppDirectoryEnum = "ANDROID_TV_APP_STORE"
	MobileAppDirectoryEnumGenericCtvAppStore   MobileAppDirectoryEnum = "GENERIC_CTV_APP_STORE"
)

type MobileApp struct {
	Directory     *MobileAppDirectoryEnum `json:"directory,omitempty"`
	ID            *string                 `json:"id,omitempty"`
	Kind          *string                 `json:"kind,omitempty"`
	PublisherName *string                 `json:"publisherName,omitempty"`
	Title         *string                 `json:"title,omitempty"`
}
