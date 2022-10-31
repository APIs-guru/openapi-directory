package shared



type AccountQuota struct {
    PerProject []PerProjectQuota `json:"PerProject,omitempty"`
    Predictions *Quota `json:"Predictions,omitempty"`
    Projects *Quota `json:"Projects,omitempty"`
    Tier *string `json:"Tier,omitempty"`
    
}

