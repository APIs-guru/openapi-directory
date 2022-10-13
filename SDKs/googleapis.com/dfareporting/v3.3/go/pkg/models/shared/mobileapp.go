package shared

type MobileAppDirectoryEnum string

const (
	MobileAppDirectoryEnumUnknown         MobileAppDirectoryEnum = "UNKNOWN"
	MobileAppDirectoryEnumAppleAppStore   MobileAppDirectoryEnum = "APPLE_APP_STORE"
	MobileAppDirectoryEnumGooglePlayStore MobileAppDirectoryEnum = "GOOGLE_PLAY_STORE"
)

type MobileApp struct {
	Directory     *MobileAppDirectoryEnum `json:"directory"`
	ID            *string                 `json:"id"`
	Kind          *string                 `json:"kind"`
	PublisherName *string                 `json:"publisherName"`
	Title         *string                 `json:"title"`
}
