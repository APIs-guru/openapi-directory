import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProductClusterBrandInventoryStatusEnum {
    InventoryStatusUnspecified = "INVENTORY_STATUS_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    NotInInventory = "NOT_IN_INVENTORY"
}

export enum ProductClusterInventoryStatusEnum {
    InventoryStatusUnspecified = "INVENTORY_STATUS_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    NotInInventory = "NOT_IN_INVENTORY"
}


// ProductCluster
/** 
 * Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.
**/
export class ProductCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=brandInventoryStatus" })
  brandInventoryStatus?: ProductClusterBrandInventoryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=categoryL1" })
  categoryL1?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryL2" })
  categoryL2?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryL3" })
  categoryL3?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryL4" })
  categoryL4?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryL5" })
  categoryL5?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryStatus" })
  inventoryStatus?: ProductClusterInventoryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=variantGtins" })
  variantGtins?: string[];
}
