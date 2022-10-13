package shared

type UpgradeOccurrence struct {
	Distribution  *UpgradeDistribution `json:"distribution"`
	Package       *string              `json:"package"`
	ParsedVersion *Version             `json:"parsedVersion"`
}
