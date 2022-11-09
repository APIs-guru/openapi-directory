import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupObjectsRequest
/** 
 * Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.
**/
export class GroupObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=childrenObjectIds" })
  childrenObjectIds?: string[];

  @Metadata({ data: "json, name=groupObjectId" })
  groupObjectId?: string;
}
