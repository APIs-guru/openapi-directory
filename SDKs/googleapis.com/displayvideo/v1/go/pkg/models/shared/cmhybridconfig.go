package shared

type CmHybridConfig struct {
	CmAccountID                   *string  `json:"cmAccountId"`
	CmFloodlightConfigID          *string  `json:"cmFloodlightConfigId"`
	CmFloodlightLinkingAuthorized *bool    `json:"cmFloodlightLinkingAuthorized"`
	CmSyncableSiteIds             []string `json:"cmSyncableSiteIds"`
	Dv360ToCmCostReportingEnabled *bool    `json:"dv360ToCmCostReportingEnabled"`
	Dv360ToCmDataSharingEnabled   *bool    `json:"dv360ToCmDataSharingEnabled"`
}
