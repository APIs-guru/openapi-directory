package shared

type AwsSourceVMDetailsFirmwareEnum string

const (
	AwsSourceVMDetailsFirmwareEnumFirmwareUnspecified AwsSourceVMDetailsFirmwareEnum = "FIRMWARE_UNSPECIFIED"
	AwsSourceVMDetailsFirmwareEnumEfi                 AwsSourceVMDetailsFirmwareEnum = "EFI"
	AwsSourceVMDetailsFirmwareEnumBios                AwsSourceVMDetailsFirmwareEnum = "BIOS"
)

// AwsSourceVMDetails
// Represent the source AWS VM details.
type AwsSourceVMDetails struct {
	CommittedStorageBytes *string                         `json:"committedStorageBytes,omitempty"`
	Firmware              *AwsSourceVMDetailsFirmwareEnum `json:"firmware,omitempty"`
}
