import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupObjectsResponse
/** 
 * The result of grouping objects.
**/
export class GroupObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
