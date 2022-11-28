package shared

// PurgeProductsRequest
// Request message for the `PurgeProducts` method.
type PurgeProductsRequest struct {
	DeleteOrphanProducts  *bool                  `json:"deleteOrphanProducts,omitempty"`
	Force                 *bool                  `json:"force,omitempty"`
	ProductSetPurgeConfig *ProductSetPurgeConfig `json:"productSetPurgeConfig,omitempty"`
}
