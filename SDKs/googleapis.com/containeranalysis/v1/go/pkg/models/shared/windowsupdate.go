package shared

// WindowsUpdate
// Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
type WindowsUpdate struct {
	Categories             []Category `json:"categories,omitempty"`
	Description            *string    `json:"description,omitempty"`
	Identity               *Identity  `json:"identity,omitempty"`
	KbArticleIds           []string   `json:"kbArticleIds,omitempty"`
	LastPublishedTimestamp *string    `json:"lastPublishedTimestamp,omitempty"`
	SupportURL             *string    `json:"supportUrl,omitempty"`
	Title                  *string    `json:"title,omitempty"`
}
