import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";


// Ancestor
/** 
 * Identifying information for a single ancestor of a project.
**/
export class Ancestor extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
