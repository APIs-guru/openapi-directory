import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum RateDetailsInventorySourceRateTypeEnum {
    InventorySourceRateTypeUnspecified = "INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED",
    InventorySourceRateTypeCpmFixed = "INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED",
    InventorySourceRateTypeCpmFloor = "INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR",
    InventorySourceRateTypeCpd = "INVENTORY_SOURCE_RATE_TYPE_CPD",
    InventorySourceRateTypeFlat = "INVENTORY_SOURCE_RATE_TYPE_FLAT"
}
/**
 * The rate related settings of the inventory source.
**/
export declare class RateDetails extends SpeakeasyBase {
    inventorySourceRateType?: RateDetailsInventorySourceRateTypeEnum;
    minimumSpend?: Money;
    rate?: Money;
    unitsPurchased?: string;
}
