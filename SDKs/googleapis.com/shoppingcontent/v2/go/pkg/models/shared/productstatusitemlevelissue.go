package shared

type ProductStatusItemLevelIssue struct {
	AttributeName *string `json:"attributeName"`
	Code          *string `json:"code"`
	Description   *string `json:"description"`
	Destination   *string `json:"destination"`
	Detail        *string `json:"detail"`
	Documentation *string `json:"documentation"`
	Resolution    *string `json:"resolution"`
	Servability   *string `json:"servability"`
}
