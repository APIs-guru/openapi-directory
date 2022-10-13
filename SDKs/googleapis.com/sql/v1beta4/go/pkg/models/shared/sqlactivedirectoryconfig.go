package shared

type SQLActiveDirectoryConfig struct {
	Domain *string `json:"domain"`
	Kind   *string `json:"kind"`
}
