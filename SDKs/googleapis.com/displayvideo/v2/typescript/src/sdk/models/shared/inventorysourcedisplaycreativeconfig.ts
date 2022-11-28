import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";



// InventorySourceDisplayCreativeConfig
/** 
 * The configuration for display creatives.
**/
export class InventorySourceDisplayCreativeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeSize" })
  creativeSize?: Dimensions;
}
