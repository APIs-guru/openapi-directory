package shared

// UpgradeOccurrence
// An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
type UpgradeOccurrence struct {
	Distribution  *UpgradeDistribution `json:"distribution,omitempty"`
	Package       *string              `json:"package,omitempty"`
	ParsedVersion *Version             `json:"parsedVersion,omitempty"`
	WindowsUpdate *WindowsUpdate       `json:"windowsUpdate,omitempty"`
}
