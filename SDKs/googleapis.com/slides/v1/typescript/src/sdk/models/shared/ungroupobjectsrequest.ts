import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UngroupObjectsRequest
/** 
 * Ungroups objects, such as groups.
**/
export class UngroupObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectIds" })
  objectIds?: string[];
}
