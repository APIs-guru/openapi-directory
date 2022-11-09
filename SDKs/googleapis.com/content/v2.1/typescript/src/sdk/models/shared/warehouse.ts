import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BusinessDayConfig } from "./businessdayconfig";
import { WarehouseCutoffTime } from "./warehousecutofftime";
import { Address } from "./address";


// Warehouse
/** 
 * A fulfillment warehouse, which stores and handles inventory.
**/
export class Warehouse extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessDayConfig" })
  businessDayConfig?: BusinessDayConfig;

  @Metadata({ data: "json, name=cutoffTime" })
  cutoffTime?: WarehouseCutoffTime;

  @Metadata({ data: "json, name=handlingDays" })
  handlingDays?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=shippingAddress" })
  shippingAddress?: Address;
}
