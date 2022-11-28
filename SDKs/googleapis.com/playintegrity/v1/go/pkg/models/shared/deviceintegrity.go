package shared

type DeviceIntegrityDeviceRecognitionVerdictEnum string

const (
	DeviceIntegrityDeviceRecognitionVerdictEnumUnknown               DeviceIntegrityDeviceRecognitionVerdictEnum = "UNKNOWN"
	DeviceIntegrityDeviceRecognitionVerdictEnumMeetsBasicIntegrity   DeviceIntegrityDeviceRecognitionVerdictEnum = "MEETS_BASIC_INTEGRITY"
	DeviceIntegrityDeviceRecognitionVerdictEnumMeetsDeviceIntegrity  DeviceIntegrityDeviceRecognitionVerdictEnum = "MEETS_DEVICE_INTEGRITY"
	DeviceIntegrityDeviceRecognitionVerdictEnumMeetsStrongIntegrity  DeviceIntegrityDeviceRecognitionVerdictEnum = "MEETS_STRONG_INTEGRITY"
	DeviceIntegrityDeviceRecognitionVerdictEnumMeetsVirtualIntegrity DeviceIntegrityDeviceRecognitionVerdictEnum = "MEETS_VIRTUAL_INTEGRITY"
)

// DeviceIntegrity
// Contains the device attestation information.
type DeviceIntegrity struct {
	DeviceRecognitionVerdict []DeviceIntegrityDeviceRecognitionVerdictEnum `json:"deviceRecognitionVerdict,omitempty"`
}
