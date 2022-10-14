package shared

type GoogleHomeEnterpriseSdmV1Structure struct {
	Name   *string                `json:"name,omitempty"`
	Traits map[string]interface{} `json:"traits,omitempty"`
}
