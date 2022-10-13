package shared

type GclbTarget struct {
	IPConfigs        []IPConfig `json:"ipConfigs"`
	TargetHTTPSProxy *string    `json:"targetHttpsProxy"`
	TargetSslProxy   *string    `json:"targetSslProxy"`
}
