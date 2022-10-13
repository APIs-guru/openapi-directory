package shared

type InventoryWindowsUpdatePackage struct {
	Categories               []InventoryWindowsUpdatePackageWindowsUpdateCategory `json:"categories"`
	Description              *string                                              `json:"description"`
	KbArticleIds             []string                                             `json:"kbArticleIds"`
	LastDeploymentChangeTime *string                                              `json:"lastDeploymentChangeTime"`
	MoreInfoUrls             []string                                             `json:"moreInfoUrls"`
	RevisionNumber           *int32                                               `json:"revisionNumber"`
	SupportURL               *string                                              `json:"supportUrl"`
	Title                    *string                                              `json:"title"`
	UpdateID                 *string                                              `json:"updateId"`
}
