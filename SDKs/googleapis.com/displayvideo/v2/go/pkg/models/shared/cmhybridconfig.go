package shared

type CmHybridConfig struct {
	CmAccountID                   *string  `json:"cmAccountId,omitempty"`
	CmFloodlightConfigID          *string  `json:"cmFloodlightConfigId,omitempty"`
	CmFloodlightLinkingAuthorized *bool    `json:"cmFloodlightLinkingAuthorized,omitempty"`
	CmSyncableSiteIds             []string `json:"cmSyncableSiteIds,omitempty"`
	Dv360ToCmCostReportingEnabled *bool    `json:"dv360ToCmCostReportingEnabled,omitempty"`
	Dv360ToCmDataSharingEnabled   *bool    `json:"dv360ToCmDataSharingEnabled,omitempty"`
}
