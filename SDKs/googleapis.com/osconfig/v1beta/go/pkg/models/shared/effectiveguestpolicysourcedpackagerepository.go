package shared

// EffectiveGuestPolicySourcedPackageRepository
// A guest policy package repository including its source.
type EffectiveGuestPolicySourcedPackageRepository struct {
	PackageRepository *PackageRepository `json:"packageRepository,omitempty"`
	Source            *string            `json:"source,omitempty"`
}
