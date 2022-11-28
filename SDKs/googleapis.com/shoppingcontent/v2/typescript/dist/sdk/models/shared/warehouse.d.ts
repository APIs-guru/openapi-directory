import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessDayConfig } from "./businessdayconfig";
import { WarehouseCutoffTime } from "./warehousecutofftime";
import { Address } from "./address";
/**
 * A fulfillment warehouse, which stores and handles inventory.
**/
export declare class Warehouse extends SpeakeasyBase {
    businessDayConfig?: BusinessDayConfig;
    cutoffTime?: WarehouseCutoffTime;
    handlingDays?: string;
    name?: string;
    shippingAddress?: Address;
}
