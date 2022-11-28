import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Media
/** 
 * Media resource.
**/
export class Media extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
