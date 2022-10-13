package shared

type ModifyCloudToDeviceConfigRequest struct {
	BinaryData      *string `json:"binaryData"`
	VersionToUpdate *string `json:"versionToUpdate"`
}
