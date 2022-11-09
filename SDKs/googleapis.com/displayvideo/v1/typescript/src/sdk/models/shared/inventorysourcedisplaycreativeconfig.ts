import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimensions } from "./dimensions";


// InventorySourceDisplayCreativeConfig
/** 
 * The configuration for display creatives.
**/
export class InventorySourceDisplayCreativeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeSize" })
  creativeSize?: Dimensions;
}
