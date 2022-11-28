import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProductClusterBrandInventoryStatusEnum {
    InventoryStatusUnspecified = "INVENTORY_STATUS_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    NotInInventory = "NOT_IN_INVENTORY"
}
export declare enum ProductClusterInventoryStatusEnum {
    InventoryStatusUnspecified = "INVENTORY_STATUS_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    NotInInventory = "NOT_IN_INVENTORY"
}
/**
 * Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.
**/
export declare class ProductCluster extends SpeakeasyBase {
    brand?: string;
    brandInventoryStatus?: ProductClusterBrandInventoryStatusEnum;
    categoryL1?: string;
    categoryL2?: string;
    categoryL3?: string;
    categoryL4?: string;
    categoryL5?: string;
    inventoryStatus?: ProductClusterInventoryStatusEnum;
    title?: string;
    variantGtins?: string[];
}
