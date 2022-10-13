package shared

type PackageNoteArchitectureEnum string

const (
	PackageNoteArchitectureEnumArchitectureUnspecified PackageNoteArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	PackageNoteArchitectureEnumX86                     PackageNoteArchitectureEnum = "X86"
	PackageNoteArchitectureEnumX64                     PackageNoteArchitectureEnum = "X64"
)

type PackageNote struct {
	Architecture *PackageNoteArchitectureEnum `json:"architecture"`
	CpeURI       *string                      `json:"cpeUri"`
	Description  *string                      `json:"description"`
	Digest       []Digest                     `json:"digest"`
	Distribution []Distribution               `json:"distribution"`
	License      *License                     `json:"license"`
	Maintainer   *string                      `json:"maintainer"`
	Name         *string                      `json:"name"`
	PackageType  *string                      `json:"packageType"`
	URL          *string                      `json:"url"`
	Version      *Version                     `json:"version"`
}
