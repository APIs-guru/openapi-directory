package shared



type EffectiveGuestPolicySourcedPackage struct {
    Package *Package `json:"package,omitempty"`
    Source *string `json:"source,omitempty"`
    
}

