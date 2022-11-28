package shared

// UpgradeNote
// An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field represents the information related to the update.
type UpgradeNote struct {
	Distributions []UpgradeDistribution `json:"distributions,omitempty"`
	Package       *string               `json:"package,omitempty"`
	Version       *Version              `json:"version,omitempty"`
	WindowsUpdate *WindowsUpdate        `json:"windowsUpdate,omitempty"`
}
