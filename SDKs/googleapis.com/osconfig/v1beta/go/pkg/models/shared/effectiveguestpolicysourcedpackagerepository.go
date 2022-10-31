package shared

type EffectiveGuestPolicySourcedPackageRepository struct {
	PackageRepository *PackageRepository `json:"packageRepository,omitempty"`
	Source            *string            `json:"source,omitempty"`
}
