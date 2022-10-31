package shared

type PackageOccurrenceArchitectureEnum string

const (
	PackageOccurrenceArchitectureEnumArchitectureUnspecified PackageOccurrenceArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	PackageOccurrenceArchitectureEnumX86                     PackageOccurrenceArchitectureEnum = "X86"
	PackageOccurrenceArchitectureEnumX64                     PackageOccurrenceArchitectureEnum = "X64"
)

type PackageOccurrence struct {
	Architecture *PackageOccurrenceArchitectureEnum `json:"architecture,omitempty"`
	CpeURI       *string                            `json:"cpeUri,omitempty"`
	License      *License                           `json:"license,omitempty"`
	Location     []Location                         `json:"location,omitempty"`
	Name         *string                            `json:"name,omitempty"`
	PackageType  *string                            `json:"packageType,omitempty"`
	Version      *Version                           `json:"version,omitempty"`
}
