package shared

type Form struct {
	FormID        *string       `json:"formId,omitempty"`
	Info          *Info         `json:"info,omitempty"`
	Items         []Item        `json:"items,omitempty"`
	LinkedSheetID *string       `json:"linkedSheetId,omitempty"`
	ResponderURI  *string       `json:"responderUri,omitempty"`
	RevisionID    *string       `json:"revisionId,omitempty"`
	Settings      *FormSettings `json:"settings,omitempty"`
}
