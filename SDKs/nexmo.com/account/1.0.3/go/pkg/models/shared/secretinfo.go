package shared

type SecretInfo struct {
	Links     *SecretMgmtLinks `json:"_links"`
	CreatedAt *string          `json:"created_at"`
	ID        *string          `json:"id"`
}
