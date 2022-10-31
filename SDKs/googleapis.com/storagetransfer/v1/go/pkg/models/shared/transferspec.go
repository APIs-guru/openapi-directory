package shared

type TransferSpec struct {
	AwsS3CompatibleDataSource   *AwsS3CompatibleData  `json:"awsS3CompatibleDataSource,omitempty"`
	AwsS3DataSource             *AwsS3Data            `json:"awsS3DataSource,omitempty"`
	AzureBlobStorageDataSource  *AzureBlobStorageData `json:"azureBlobStorageDataSource,omitempty"`
	GcsDataSink                 *GcsData              `json:"gcsDataSink,omitempty"`
	GcsDataSource               *GcsData              `json:"gcsDataSource,omitempty"`
	GcsIntermediateDataLocation *GcsData              `json:"gcsIntermediateDataLocation,omitempty"`
	HTTPDataSource              *HTTPData             `json:"httpDataSource,omitempty"`
	ObjectConditions            *ObjectConditions     `json:"objectConditions,omitempty"`
	PosixDataSink               *PosixFilesystem      `json:"posixDataSink,omitempty"`
	PosixDataSource             *PosixFilesystem      `json:"posixDataSource,omitempty"`
	SinkAgentPoolName           *string               `json:"sinkAgentPoolName,omitempty"`
	SourceAgentPoolName         *string               `json:"sourceAgentPoolName,omitempty"`
	TransferManifest            *TransferManifest     `json:"transferManifest,omitempty"`
	TransferOptions             *TransferOptions      `json:"transferOptions,omitempty"`
}
