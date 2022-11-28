package shared

// UpgradeInstanceRequest
// Request for UpgradeInstance.
type UpgradeInstanceRequest struct {
	RedisVersion *string `json:"redisVersion,omitempty"`
}
