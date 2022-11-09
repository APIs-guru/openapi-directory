import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BlockedResource
/** 
 * Blocked resource.
**/
export class BlockedResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
