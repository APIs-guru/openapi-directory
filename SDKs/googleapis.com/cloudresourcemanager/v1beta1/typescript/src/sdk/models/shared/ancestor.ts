import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";



// Ancestor
/** 
 * Identifying information for a single ancestor of a project.
**/
export class Ancestor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
