import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShieldedNodes
/** 
 * Configuration of Shielded Nodes feature.
**/
export class ShieldedNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
