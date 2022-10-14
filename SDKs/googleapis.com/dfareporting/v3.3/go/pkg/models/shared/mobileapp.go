package shared

type MobileAppDirectoryEnum string

const (
	MobileAppDirectoryEnumUnknown         MobileAppDirectoryEnum = "UNKNOWN"
	MobileAppDirectoryEnumAppleAppStore   MobileAppDirectoryEnum = "APPLE_APP_STORE"
	MobileAppDirectoryEnumGooglePlayStore MobileAppDirectoryEnum = "GOOGLE_PLAY_STORE"
)

type MobileApp struct {
	Directory     *MobileAppDirectoryEnum `json:"directory,omitempty"`
	ID            *string                 `json:"id,omitempty"`
	Kind          *string                 `json:"kind,omitempty"`
	PublisherName *string                 `json:"publisherName,omitempty"`
	Title         *string                 `json:"title,omitempty"`
}
