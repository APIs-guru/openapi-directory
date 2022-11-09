import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupResult
/** 
 * Result containing the properties and count of a groupBy request.
**/
export class GroupResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, any>;
}
