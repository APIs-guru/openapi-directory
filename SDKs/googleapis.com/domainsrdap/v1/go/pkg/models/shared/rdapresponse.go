package shared

type RdapResponse struct {
	Description     []string  `json:"description"`
	ErrorCode       *int32    `json:"errorCode"`
	JSONResponse    *HTTPBody `json:"jsonResponse"`
	Lang            *string   `json:"lang"`
	Notices         []Notice  `json:"notices"`
	RdapConformance []string  `json:"rdapConformance"`
	Title           *string   `json:"title"`
}
