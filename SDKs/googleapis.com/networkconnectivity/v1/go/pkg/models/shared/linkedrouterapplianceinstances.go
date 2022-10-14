package shared

type LinkedRouterApplianceInstances struct {
	Instances              []RouterApplianceInstance `json:"instances,omitempty"`
	SiteToSiteDataTransfer *bool                     `json:"siteToSiteDataTransfer,omitempty"`
}
