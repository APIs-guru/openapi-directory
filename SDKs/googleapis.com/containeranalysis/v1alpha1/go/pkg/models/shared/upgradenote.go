package shared

type UpgradeNote struct {
	Distributions []UpgradeDistribution `json:"distributions"`
	Package       *string               `json:"package"`
	Version       *Version              `json:"version"`
}
