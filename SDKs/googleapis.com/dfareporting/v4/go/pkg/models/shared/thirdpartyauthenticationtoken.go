package shared

type ThirdPartyAuthenticationToken struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
