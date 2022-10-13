package shared

type PackageArchitectureEnum string

const (
	PackageArchitectureEnumArchitectureUnspecified PackageArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	PackageArchitectureEnumX86                     PackageArchitectureEnum = "X86"
	PackageArchitectureEnumX64                     PackageArchitectureEnum = "X64"
)

type Package struct {
	Architecture *PackageArchitectureEnum `json:"architecture"`
	CpeURI       *string                  `json:"cpeUri"`
	Description  *string                  `json:"description"`
	Digest       []Digest                 `json:"digest"`
	Distribution []Distribution           `json:"distribution"`
	License      *License                 `json:"license"`
	Maintainer   *string                  `json:"maintainer"`
	Name         *string                  `json:"name"`
	PackageType  *string                  `json:"packageType"`
	URL          *string                  `json:"url"`
	Version      *Version                 `json:"version"`
}
