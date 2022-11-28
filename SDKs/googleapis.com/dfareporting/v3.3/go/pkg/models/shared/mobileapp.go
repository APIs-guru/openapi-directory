package shared

type MobileAppDirectoryEnum string

const (
	MobileAppDirectoryEnumUnknown         MobileAppDirectoryEnum = "UNKNOWN"
	MobileAppDirectoryEnumAppleAppStore   MobileAppDirectoryEnum = "APPLE_APP_STORE"
	MobileAppDirectoryEnumGooglePlayStore MobileAppDirectoryEnum = "GOOGLE_PLAY_STORE"
)

// MobileApp
// Contains information about a mobile app. Used as a landing page deep link.
type MobileApp struct {
	Directory     *MobileAppDirectoryEnum `json:"directory,omitempty"`
	ID            *string                 `json:"id,omitempty"`
	Kind          *string                 `json:"kind,omitempty"`
	PublisherName *string                 `json:"publisherName,omitempty"`
	Title         *string                 `json:"title,omitempty"`
}
