package shared

// AzureBlobStorageData
// An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).
type AzureBlobStorageData struct {
	AzureCredentials *AzureCredentials `json:"azureCredentials,omitempty"`
	Container        *string           `json:"container,omitempty"`
	Path             *string           `json:"path,omitempty"`
	StorageAccount   *string           `json:"storageAccount,omitempty"`
}
