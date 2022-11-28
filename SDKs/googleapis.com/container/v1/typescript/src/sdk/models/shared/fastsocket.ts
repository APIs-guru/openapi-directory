import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FastSocket
/** 
 * Configuration of Fast Socket feature.
**/
export class FastSocket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
