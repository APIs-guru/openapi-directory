package shared

type AccountStatusItemLevelIssue struct {
	AttributeName *string `json:"attributeName,omitempty"`
	Code          *string `json:"code,omitempty"`
	Description   *string `json:"description,omitempty"`
	Detail        *string `json:"detail,omitempty"`
	Documentation *string `json:"documentation,omitempty"`
	NumItems      *string `json:"numItems,omitempty"`
	Resolution    *string `json:"resolution,omitempty"`
	Servability   *string `json:"servability,omitempty"`
}
