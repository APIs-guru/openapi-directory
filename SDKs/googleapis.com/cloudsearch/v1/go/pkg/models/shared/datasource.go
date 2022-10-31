package shared



type DataSource struct {
    DisableModifications *bool `json:"disableModifications,omitempty"`
    DisableServing *bool `json:"disableServing,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    IndexingServiceAccounts []string `json:"indexingServiceAccounts,omitempty"`
    ItemsVisibility []GSuitePrincipal `json:"itemsVisibility,omitempty"`
    Name *string `json:"name,omitempty"`
    OperationIds []string `json:"operationIds,omitempty"`
    ReturnThumbnailUrls *bool `json:"returnThumbnailUrls,omitempty"`
    ShortName *string `json:"shortName,omitempty"`
    
}

