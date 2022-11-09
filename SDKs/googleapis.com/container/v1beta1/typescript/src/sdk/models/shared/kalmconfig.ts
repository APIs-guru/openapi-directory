import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KalmConfig
/** 
 * Configuration options for the KALM addon.
**/
export class KalmConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
