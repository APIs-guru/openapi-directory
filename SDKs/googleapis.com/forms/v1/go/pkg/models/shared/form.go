package shared

type Form struct {
	FormID        *string       `json:"formId"`
	Info          *Info         `json:"info"`
	Items         []Item        `json:"items"`
	LinkedSheetID *string       `json:"linkedSheetId"`
	ResponderURI  *string       `json:"responderUri"`
	RevisionID    *string       `json:"revisionId"`
	Settings      *FormSettings `json:"settings"`
}
