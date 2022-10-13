package shared

type AccessPolicy struct {
	Allowed   *bool    `json:"allowed"`
	Exception []string `json:"exception"`
}
