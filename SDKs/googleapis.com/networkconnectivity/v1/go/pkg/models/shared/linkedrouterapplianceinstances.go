package shared

type LinkedRouterApplianceInstances struct {
	Instances              []RouterApplianceInstance `json:"instances"`
	SiteToSiteDataTransfer *bool                     `json:"siteToSiteDataTransfer"`
}
