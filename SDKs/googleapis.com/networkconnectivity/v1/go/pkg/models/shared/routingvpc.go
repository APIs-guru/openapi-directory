package shared

type RoutingVpc struct {
	RequiredForNewSiteToSiteDataTransferSpokes *bool   `json:"requiredForNewSiteToSiteDataTransferSpokes"`
	URI                                        *string `json:"uri"`
}
