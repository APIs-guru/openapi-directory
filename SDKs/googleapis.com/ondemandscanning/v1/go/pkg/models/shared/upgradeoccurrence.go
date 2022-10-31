package shared

type UpgradeOccurrence struct {
	Distribution  *UpgradeDistribution `json:"distribution,omitempty"`
	Package       *string              `json:"package,omitempty"`
	ParsedVersion *Version             `json:"parsedVersion,omitempty"`
	WindowsUpdate *WindowsUpdate       `json:"windowsUpdate,omitempty"`
}
