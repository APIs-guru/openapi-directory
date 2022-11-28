package shared

type ProductClusterBrandInventoryStatusEnum string

const (
	ProductClusterBrandInventoryStatusEnumInventoryStatusUnspecified ProductClusterBrandInventoryStatusEnum = "INVENTORY_STATUS_UNSPECIFIED"
	ProductClusterBrandInventoryStatusEnumInStock                    ProductClusterBrandInventoryStatusEnum = "IN_STOCK"
	ProductClusterBrandInventoryStatusEnumOutOfStock                 ProductClusterBrandInventoryStatusEnum = "OUT_OF_STOCK"
	ProductClusterBrandInventoryStatusEnumNotInInventory             ProductClusterBrandInventoryStatusEnum = "NOT_IN_INVENTORY"
)

type ProductClusterInventoryStatusEnum string

const (
	ProductClusterInventoryStatusEnumInventoryStatusUnspecified ProductClusterInventoryStatusEnum = "INVENTORY_STATUS_UNSPECIFIED"
	ProductClusterInventoryStatusEnumInStock                    ProductClusterInventoryStatusEnum = "IN_STOCK"
	ProductClusterInventoryStatusEnumOutOfStock                 ProductClusterInventoryStatusEnum = "OUT_OF_STOCK"
	ProductClusterInventoryStatusEnumNotInInventory             ProductClusterInventoryStatusEnum = "NOT_IN_INVENTORY"
)

// ProductCluster
// Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.
type ProductCluster struct {
	Brand                *string                                 `json:"brand,omitempty"`
	BrandInventoryStatus *ProductClusterBrandInventoryStatusEnum `json:"brandInventoryStatus,omitempty"`
	CategoryL1           *string                                 `json:"categoryL1,omitempty"`
	CategoryL2           *string                                 `json:"categoryL2,omitempty"`
	CategoryL3           *string                                 `json:"categoryL3,omitempty"`
	CategoryL4           *string                                 `json:"categoryL4,omitempty"`
	CategoryL5           *string                                 `json:"categoryL5,omitempty"`
	InventoryStatus      *ProductClusterInventoryStatusEnum      `json:"inventoryStatus,omitempty"`
	Title                *string                                 `json:"title,omitempty"`
	VariantGtins         []string                                `json:"variantGtins,omitempty"`
}
