package shared

type AuthToken struct {
	AuthToken *string `json:"authToken,omitempty"`
	Type      *string `json:"type,omitempty"`
}
