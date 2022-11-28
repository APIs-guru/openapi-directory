package shared

// ModifyCloudToDeviceConfigRequest
// Request for `ModifyCloudToDeviceConfig`.
type ModifyCloudToDeviceConfigRequest struct {
	BinaryData      *string `json:"binaryData,omitempty"`
	VersionToUpdate *string `json:"versionToUpdate,omitempty"`
}
