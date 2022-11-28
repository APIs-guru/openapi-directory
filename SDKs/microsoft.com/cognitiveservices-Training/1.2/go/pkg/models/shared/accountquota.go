package shared

// AccountQuota
// Represents a set of quotas associated with an account
type AccountQuota struct {
	PerProject  []PerProjectQuota `json:"PerProject,omitempty"`
	Predictions *Quota            `json:"Predictions,omitempty"`
	Projects    *Quota            `json:"Projects,omitempty"`
	Tier        *string           `json:"Tier,omitempty"`
}
