package shared

type PackageNoteArchitectureEnum string

const (
	PackageNoteArchitectureEnumArchitectureUnspecified PackageNoteArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	PackageNoteArchitectureEnumX86                     PackageNoteArchitectureEnum = "X86"
	PackageNoteArchitectureEnumX64                     PackageNoteArchitectureEnum = "X64"
)

// PackageNote
// PackageNote represents a particular package version.
type PackageNote struct {
	Architecture *PackageNoteArchitectureEnum `json:"architecture,omitempty"`
	CpeURI       *string                      `json:"cpeUri,omitempty"`
	Description  *string                      `json:"description,omitempty"`
	Digest       []Digest                     `json:"digest,omitempty"`
	Distribution []Distribution               `json:"distribution,omitempty"`
	License      *License                     `json:"license,omitempty"`
	Maintainer   *string                      `json:"maintainer,omitempty"`
	Name         *string                      `json:"name,omitempty"`
	PackageType  *string                      `json:"packageType,omitempty"`
	URL          *string                      `json:"url,omitempty"`
	Version      *Version                     `json:"version,omitempty"`
}
