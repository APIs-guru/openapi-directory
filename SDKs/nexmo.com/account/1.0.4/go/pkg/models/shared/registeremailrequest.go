package shared

type RegisterEmailRequestProviderEnum string

const (
	RegisterEmailRequestProviderEnumEmail RegisterEmailRequestProviderEnum = "email"
)

type RegisterEmailRequest struct {
	ApplicationIds map[string]interface{}           `json:"application_ids,omitempty"`
	Name           *string                          `json:"name,omitempty"`
	Provider       RegisterEmailRequestProviderEnum `json:"provider"`
	Value          string                           `json:"value"`
}
