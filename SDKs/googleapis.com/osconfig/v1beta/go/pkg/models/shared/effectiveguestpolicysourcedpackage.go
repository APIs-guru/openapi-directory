package shared

// EffectiveGuestPolicySourcedPackage
// A guest policy package including its source.
type EffectiveGuestPolicySourcedPackage struct {
	Package *Package `json:"package,omitempty"`
	Source  *string  `json:"source,omitempty"`
}
