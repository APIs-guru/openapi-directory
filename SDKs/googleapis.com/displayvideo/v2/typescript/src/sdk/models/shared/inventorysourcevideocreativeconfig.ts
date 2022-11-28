import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventorySourceVideoCreativeConfig
/** 
 * The configuration for video creatives.
**/
export class InventorySourceVideoCreativeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;
}
