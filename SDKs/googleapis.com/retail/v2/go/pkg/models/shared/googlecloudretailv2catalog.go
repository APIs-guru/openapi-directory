package shared

type GoogleCloudRetailV2Catalog struct {
	DisplayName        *string                                `json:"displayName"`
	Name               *string                                `json:"name"`
	ProductLevelConfig *GoogleCloudRetailV2ProductLevelConfig `json:"productLevelConfig"`
}
