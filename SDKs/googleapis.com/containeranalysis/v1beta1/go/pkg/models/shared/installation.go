package shared

type InstallationArchitectureEnum string

const (
	InstallationArchitectureEnumArchitectureUnspecified InstallationArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	InstallationArchitectureEnumX86                     InstallationArchitectureEnum = "X86"
	InstallationArchitectureEnumX64                     InstallationArchitectureEnum = "X64"
)

type Installation struct {
	Architecture *InstallationArchitectureEnum `json:"architecture"`
	CpeURI       *string                       `json:"cpeUri"`
	License      *License                      `json:"license"`
	Location     []Location                    `json:"location"`
	Name         *string                       `json:"name"`
	PackageType  *string                       `json:"packageType"`
	Version      *Version                      `json:"version"`
}
