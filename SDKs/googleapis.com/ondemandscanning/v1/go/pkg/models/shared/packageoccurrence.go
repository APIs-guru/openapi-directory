package shared

type PackageOccurrenceArchitectureEnum string

const (
	PackageOccurrenceArchitectureEnumArchitectureUnspecified PackageOccurrenceArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	PackageOccurrenceArchitectureEnumX86                     PackageOccurrenceArchitectureEnum = "X86"
	PackageOccurrenceArchitectureEnumX64                     PackageOccurrenceArchitectureEnum = "X64"
)

type PackageOccurrence struct {
	Architecture *PackageOccurrenceArchitectureEnum `json:"architecture"`
	CpeURI       *string                            `json:"cpeUri"`
	License      *License                           `json:"license"`
	Location     []Location                         `json:"location"`
	Name         *string                            `json:"name"`
	PackageType  *string                            `json:"packageType"`
	Version      *Version                           `json:"version"`
}
