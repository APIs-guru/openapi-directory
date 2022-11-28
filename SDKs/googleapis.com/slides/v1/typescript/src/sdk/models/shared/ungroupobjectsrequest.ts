import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UngroupObjectsRequest
/** 
 * Ungroups objects, such as groups.
**/
export class UngroupObjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds?: string[];
}
