package shared

type EffectiveGuestPolicySourcedPackageRepository struct {
	PackageRepository *PackageRepository `json:"packageRepository"`
	Source            *string            `json:"source"`
}
