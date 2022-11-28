package shared

// WindowsUpdatePackage
// Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
type WindowsUpdatePackage struct {
	Categories               []WindowsUpdateCategory `json:"categories,omitempty"`
	Description              *string                 `json:"description,omitempty"`
	KbArticleIds             []string                `json:"kbArticleIds,omitempty"`
	LastDeploymentChangeTime *string                 `json:"lastDeploymentChangeTime,omitempty"`
	MoreInfoUrls             []string                `json:"moreInfoUrls,omitempty"`
	RevisionNumber           *int32                  `json:"revisionNumber,omitempty"`
	SupportURL               *string                 `json:"supportUrl,omitempty"`
	Title                    *string                 `json:"title,omitempty"`
	UpdateID                 *string                 `json:"updateId,omitempty"`
}
