import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlockedResource } from "./blockedresource";


// ResourceIssue
/** 
 * Information about a resource with issue.
**/
export class ResourceIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockedResource" })
  blockedResource?: BlockedResource;
}
