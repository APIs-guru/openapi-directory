package shared

// VersionedPackage
// Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
type VersionedPackage struct {
	Architecture *string `json:"architecture,omitempty"`
	PackageName  *string `json:"packageName,omitempty"`
	Version      *string `json:"version,omitempty"`
}
