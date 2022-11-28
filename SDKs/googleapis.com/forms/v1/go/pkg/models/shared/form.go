package shared

// Form
// A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
type Form struct {
	FormID        *string       `json:"formId,omitempty"`
	Info          *Info         `json:"info,omitempty"`
	Items         []Item        `json:"items,omitempty"`
	LinkedSheetID *string       `json:"linkedSheetId,omitempty"`
	ResponderURI  *string       `json:"responderUri,omitempty"`
	RevisionID    *string       `json:"revisionId,omitempty"`
	Settings      *FormSettings `json:"settings,omitempty"`
}

// FormInput
// A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
type FormInput struct {
	Info     *InfoInput    `json:"info,omitempty"`
	Items    []ItemInput   `json:"items,omitempty"`
	Settings *FormSettings `json:"settings,omitempty"`
}
