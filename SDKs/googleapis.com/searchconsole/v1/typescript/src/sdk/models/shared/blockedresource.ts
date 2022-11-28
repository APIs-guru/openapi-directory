import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BlockedResource
/** 
 * Blocked resource.
**/
export class BlockedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
