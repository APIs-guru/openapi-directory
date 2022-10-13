package shared

type PurgeProductsRequest struct {
	DeleteOrphanProducts  *bool                  `json:"deleteOrphanProducts"`
	Force                 *bool                  `json:"force"`
	ProductSetPurgeConfig *ProductSetPurgeConfig `json:"productSetPurgeConfig"`
}
