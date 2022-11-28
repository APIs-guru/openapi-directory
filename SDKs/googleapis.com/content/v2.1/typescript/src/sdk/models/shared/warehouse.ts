import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BusinessDayConfig } from "./businessdayconfig";
import { WarehouseCutoffTime } from "./warehousecutofftime";
import { Address } from "./address";



// Warehouse
/** 
 * A fulfillment warehouse, which stores and handles inventory.
**/
export class Warehouse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessDayConfig" })
  businessDayConfig?: BusinessDayConfig;

  @SpeakeasyMetadata({ data: "json, name=cutoffTime" })
  cutoffTime?: WarehouseCutoffTime;

  @SpeakeasyMetadata({ data: "json, name=handlingDays" })
  handlingDays?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingAddress" })
  shippingAddress?: Address;
}
