import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkTags
/** 
 * Collection of Compute Engine network tags that can be applied to a node's underlying VM instance.
**/
export class NetworkTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
