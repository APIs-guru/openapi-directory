package shared

type Finding struct {
	End      *string `json:"end,omitempty"`
	InfoType *string `json:"infoType,omitempty"`
	Quote    *string `json:"quote,omitempty"`
	Start    *string `json:"start,omitempty"`
}
