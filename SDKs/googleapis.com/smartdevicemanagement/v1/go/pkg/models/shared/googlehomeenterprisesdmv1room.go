package shared

type GoogleHomeEnterpriseSdmV1Room struct {
	Name   *string                `json:"name,omitempty"`
	Traits map[string]interface{} `json:"traits,omitempty"`
}
