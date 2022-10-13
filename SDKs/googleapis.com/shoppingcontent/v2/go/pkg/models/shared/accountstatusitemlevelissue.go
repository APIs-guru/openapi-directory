package shared

type AccountStatusItemLevelIssue struct {
	AttributeName *string `json:"attributeName"`
	Code          *string `json:"code"`
	Description   *string `json:"description"`
	Detail        *string `json:"detail"`
	Documentation *string `json:"documentation"`
	NumItems      *string `json:"numItems"`
	Resolution    *string `json:"resolution"`
	Servability   *string `json:"servability"`
}
