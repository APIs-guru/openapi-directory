import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupResult
/** 
 * Result containing the properties and count of a groupBy request.
**/
export class GroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, any>;
}
