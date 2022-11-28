package shared

type DistributionArchitectureEnum string

const (
	DistributionArchitectureEnumArchitectureUnspecified DistributionArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	DistributionArchitectureEnumX86                     DistributionArchitectureEnum = "X86"
	DistributionArchitectureEnumX64                     DistributionArchitectureEnum = "X64"
)

// Distribution
// This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror.
type Distribution struct {
	Architecture  *DistributionArchitectureEnum `json:"architecture,omitempty"`
	CpeURI        *string                       `json:"cpeUri,omitempty"`
	Description   *string                       `json:"description,omitempty"`
	LatestVersion *Version                      `json:"latestVersion,omitempty"`
	Maintainer    *string                       `json:"maintainer,omitempty"`
	URL           *string                       `json:"url,omitempty"`
}
