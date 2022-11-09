import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShieldedNodes
/** 
 * Configuration of Shielded Nodes feature.
**/
export class ShieldedNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
