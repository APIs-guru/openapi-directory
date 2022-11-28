package shared

// DataSource
// Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
type DataSource struct {
	DisableModifications    *bool             `json:"disableModifications,omitempty"`
	DisableServing          *bool             `json:"disableServing,omitempty"`
	DisplayName             *string           `json:"displayName,omitempty"`
	IndexingServiceAccounts []string          `json:"indexingServiceAccounts,omitempty"`
	ItemsVisibility         []GSuitePrincipal `json:"itemsVisibility,omitempty"`
	Name                    *string           `json:"name,omitempty"`
	OperationIds            []string          `json:"operationIds,omitempty"`
	ReturnThumbnailUrls     *bool             `json:"returnThumbnailUrls,omitempty"`
	ShortName               *string           `json:"shortName,omitempty"`
}
