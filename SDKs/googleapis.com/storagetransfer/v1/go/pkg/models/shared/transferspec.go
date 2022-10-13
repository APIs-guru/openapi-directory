package shared

type TransferSpec struct {
	AwsS3CompatibleDataSource   *AwsS3CompatibleData  `json:"awsS3CompatibleDataSource"`
	AwsS3DataSource             *AwsS3Data            `json:"awsS3DataSource"`
	AzureBlobStorageDataSource  *AzureBlobStorageData `json:"azureBlobStorageDataSource"`
	GcsDataSink                 *GcsData              `json:"gcsDataSink"`
	GcsDataSource               *GcsData              `json:"gcsDataSource"`
	GcsIntermediateDataLocation *GcsData              `json:"gcsIntermediateDataLocation"`
	HTTPDataSource              *HTTPData             `json:"httpDataSource"`
	ObjectConditions            *ObjectConditions     `json:"objectConditions"`
	PosixDataSink               *PosixFilesystem      `json:"posixDataSink"`
	PosixDataSource             *PosixFilesystem      `json:"posixDataSource"`
	SinkAgentPoolName           *string               `json:"sinkAgentPoolName"`
	SourceAgentPoolName         *string               `json:"sourceAgentPoolName"`
	TransferManifest            *TransferManifest     `json:"transferManifest"`
	TransferOptions             *TransferOptions      `json:"transferOptions"`
}
