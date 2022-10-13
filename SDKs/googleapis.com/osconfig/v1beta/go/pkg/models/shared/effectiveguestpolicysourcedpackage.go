package shared

type EffectiveGuestPolicySourcedPackage struct {
	Package *Package `json:"package"`
	Source  *string  `json:"source"`
}
