import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KalmConfig
/** 
 * Configuration options for the KALM addon.
**/
export class KalmConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
