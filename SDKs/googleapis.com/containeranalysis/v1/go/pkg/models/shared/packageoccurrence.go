package shared

type PackageOccurrenceArchitectureEnum string

const (
	PackageOccurrenceArchitectureEnumArchitectureUnspecified PackageOccurrenceArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	PackageOccurrenceArchitectureEnumX86                     PackageOccurrenceArchitectureEnum = "X86"
	PackageOccurrenceArchitectureEnumX64                     PackageOccurrenceArchitectureEnum = "X64"
)

// PackageOccurrence
// Details on how a particular software package was installed on a system.
type PackageOccurrence struct {
	Architecture *PackageOccurrenceArchitectureEnum `json:"architecture,omitempty"`
	CpeURI       *string                            `json:"cpeUri,omitempty"`
	License      *License                           `json:"license,omitempty"`
	Location     []Location                         `json:"location,omitempty"`
	Name         *string                            `json:"name,omitempty"`
	PackageType  *string                            `json:"packageType,omitempty"`
	Version      *Version                           `json:"version,omitempty"`
}

// PackageOccurrenceInput
// Details on how a particular software package was installed on a system.
type PackageOccurrenceInput struct {
	License  *License   `json:"license,omitempty"`
	Location []Location `json:"location,omitempty"`
	Version  *Version   `json:"version,omitempty"`
}
