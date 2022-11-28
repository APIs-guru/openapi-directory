package shared

type PackageArchitectureEnum string

const (
	PackageArchitectureEnumArchitectureUnspecified PackageArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	PackageArchitectureEnumX86                     PackageArchitectureEnum = "X86"
	PackageArchitectureEnumX64                     PackageArchitectureEnum = "X64"
)

// Package
// Package represents a particular package version.
type Package struct {
	Architecture *PackageArchitectureEnum `json:"architecture,omitempty"`
	CpeURI       *string                  `json:"cpeUri,omitempty"`
	Description  *string                  `json:"description,omitempty"`
	Digest       []Digest                 `json:"digest,omitempty"`
	Distribution []Distribution           `json:"distribution,omitempty"`
	License      *License                 `json:"license,omitempty"`
	Maintainer   *string                  `json:"maintainer,omitempty"`
	Name         *string                  `json:"name,omitempty"`
	PackageType  *string                  `json:"packageType,omitempty"`
	URL          *string                  `json:"url,omitempty"`
	Version      *Version                 `json:"version,omitempty"`
}
