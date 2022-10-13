package shared

type AzureBlobStorageData struct {
	AzureCredentials *AzureCredentials `json:"azureCredentials"`
	Container        *string           `json:"container"`
	Path             *string           `json:"path"`
	StorageAccount   *string           `json:"storageAccount"`
}
