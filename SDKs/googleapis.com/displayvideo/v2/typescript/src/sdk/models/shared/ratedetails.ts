import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";


export enum RateDetailsInventorySourceRateTypeEnum {
    InventorySourceRateTypeUnspecified = "INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED",
    InventorySourceRateTypeCpmFixed = "INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED",
    InventorySourceRateTypeCpmFloor = "INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR",
    InventorySourceRateTypeCpd = "INVENTORY_SOURCE_RATE_TYPE_CPD",
    InventorySourceRateTypeFlat = "INVENTORY_SOURCE_RATE_TYPE_FLAT"
}


// RateDetails
/** 
 * The rate related settings of the inventory source.
**/
export class RateDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventorySourceRateType" })
  inventorySourceRateType?: RateDetailsInventorySourceRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=minimumSpend" })
  minimumSpend?: Money;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: Money;

  @SpeakeasyMetadata({ data: "json, name=unitsPurchased" })
  unitsPurchased?: string;
}
