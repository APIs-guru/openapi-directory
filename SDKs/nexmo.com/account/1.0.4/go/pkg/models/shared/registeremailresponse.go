package shared

type RegisterEmailResponseProviderEnum string

const (
	RegisterEmailResponseProviderEnumEmail RegisterEmailResponseProviderEnum = "email"
)

type RegisterEmailResponse struct {
	ApplicationIds []string                           `json:"application_ids,omitempty"`
	Name           *string                            `json:"name,omitempty"`
	Provider       *RegisterEmailResponseProviderEnum `json:"provider,omitempty"`
	Value          *string                            `json:"value,omitempty"`
}
