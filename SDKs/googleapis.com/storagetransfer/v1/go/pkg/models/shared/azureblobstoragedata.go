package shared



type AzureBlobStorageData struct {
    AzureCredentials *AzureCredentials `json:"azureCredentials,omitempty"`
    Container *string `json:"container,omitempty"`
    Path *string `json:"path,omitempty"`
    StorageAccount *string `json:"storageAccount,omitempty"`
    
}

