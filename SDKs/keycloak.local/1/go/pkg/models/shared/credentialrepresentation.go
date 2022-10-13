package shared

type CredentialRepresentation struct {
	CreatedDate    *int64  `json:"createdDate"`
	CredentialData *string `json:"credentialData"`
	ID             *string `json:"id"`
	Priority       *int32  `json:"priority"`
	SecretData     *string `json:"secretData"`
	Temporary      *bool   `json:"temporary"`
	Type           *string `json:"type"`
	UserLabel      *string `json:"userLabel"`
	Value          *string `json:"value"`
}
