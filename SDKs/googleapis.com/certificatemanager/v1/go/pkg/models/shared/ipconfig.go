package shared

type IPConfig struct {
	IPAddress *string `json:"ipAddress"`
	Ports     []int64 `json:"ports"`
}
