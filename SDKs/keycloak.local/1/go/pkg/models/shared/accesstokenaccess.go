package shared

type AccessTokenAccess struct {
	Roles        []string `json:"roles"`
	VerifyCaller *bool    `json:"verify_caller"`
}
