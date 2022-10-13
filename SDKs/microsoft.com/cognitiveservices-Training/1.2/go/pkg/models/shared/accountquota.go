package shared

type AccountQuota struct {
	PerProject  []PerProjectQuota `json:"PerProject"`
	Predictions *Quota            `json:"Predictions"`
	Projects    *Quota            `json:"Projects"`
	Tier        *string           `json:"Tier"`
}
