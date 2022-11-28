package shared

// WindowsVersion
// Windows server version.
type WindowsVersion struct {
	ImageType      *string `json:"imageType,omitempty"`
	OsVersion      *string `json:"osVersion,omitempty"`
	SupportEndDate *Date   `json:"supportEndDate,omitempty"`
}
