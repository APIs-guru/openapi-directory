package shared

type UserConsentRepresentation struct {
	ClientID            *string  `json:"clientId"`
	CreatedDate         *int64   `json:"createdDate"`
	GrantedClientScopes []string `json:"grantedClientScopes"`
	LastUpdatedDate     *int64   `json:"lastUpdatedDate"`
}
