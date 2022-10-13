package shared

type DataSource struct {
	DisableModifications    *bool             `json:"disableModifications"`
	DisableServing          *bool             `json:"disableServing"`
	DisplayName             *string           `json:"displayName"`
	IndexingServiceAccounts []string          `json:"indexingServiceAccounts"`
	ItemsVisibility         []GSuitePrincipal `json:"itemsVisibility"`
	Name                    *string           `json:"name"`
	OperationIds            []string          `json:"operationIds"`
	ReturnThumbnailUrls     *bool             `json:"returnThumbnailUrls"`
	ShortName               *string           `json:"shortName"`
}
