import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupObjectsResponse
/** 
 * The result of grouping objects.
**/
export class GroupObjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
