package shared



type InventoryWindowsUpdatePackage struct {
    Categories []InventoryWindowsUpdatePackageWindowsUpdateCategory `json:"categories,omitempty"`
    Description *string `json:"description,omitempty"`
    KbArticleIds []string `json:"kbArticleIds,omitempty"`
    LastDeploymentChangeTime *string `json:"lastDeploymentChangeTime,omitempty"`
    MoreInfoUrls []string `json:"moreInfoUrls,omitempty"`
    RevisionNumber *int32 `json:"revisionNumber,omitempty"`
    SupportURL *string `json:"supportUrl,omitempty"`
    Title *string `json:"title,omitempty"`
    UpdateID *string `json:"updateId,omitempty"`
    
}

