package shared

type SasPortalOperation struct {
	Done     *bool                  `json:"done"`
	Error    *SasPortalStatus       `json:"error"`
	Metadata map[string]interface{} `json:"metadata"`
	Name     *string                `json:"name"`
	Response map[string]interface{} `json:"response"`
}
