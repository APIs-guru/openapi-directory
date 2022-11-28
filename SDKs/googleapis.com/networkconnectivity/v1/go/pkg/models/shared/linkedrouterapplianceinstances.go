package shared

// LinkedRouterApplianceInstancesInput
// A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
type LinkedRouterApplianceInstancesInput struct {
	Instances              []RouterApplianceInstance `json:"instances,omitempty"`
	SiteToSiteDataTransfer *bool                     `json:"siteToSiteDataTransfer,omitempty"`
}

// LinkedRouterApplianceInstances
// A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
type LinkedRouterApplianceInstances struct {
	Instances              []RouterApplianceInstance `json:"instances,omitempty"`
	SiteToSiteDataTransfer *bool                     `json:"siteToSiteDataTransfer,omitempty"`
	VpcNetwork             *string                   `json:"vpcNetwork,omitempty"`
}
