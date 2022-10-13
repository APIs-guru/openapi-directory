package shared

type DistributionArchitectureEnum string

const (
	DistributionArchitectureEnumArchitectureUnspecified DistributionArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	DistributionArchitectureEnumX86                     DistributionArchitectureEnum = "X86"
	DistributionArchitectureEnumX64                     DistributionArchitectureEnum = "X64"
)

type Distribution struct {
	Architecture  *DistributionArchitectureEnum `json:"architecture"`
	CpeURI        *string                       `json:"cpeUri"`
	Description   *string                       `json:"description"`
	LatestVersion *Version                      `json:"latestVersion"`
	Maintainer    *string                       `json:"maintainer"`
	URL           *string                       `json:"url"`
}
