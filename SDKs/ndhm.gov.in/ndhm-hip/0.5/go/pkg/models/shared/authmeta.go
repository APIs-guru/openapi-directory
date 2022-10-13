package shared

type AuthMeta struct {
	Expiry *string `json:"expiry"`
	Hint   *string `json:"hint"`
}
