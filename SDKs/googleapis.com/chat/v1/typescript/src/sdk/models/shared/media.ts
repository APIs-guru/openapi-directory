import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Media
/** 
 * Media resource.
**/
export class Media extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
