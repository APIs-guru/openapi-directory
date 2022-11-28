import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlockedResource } from "./blockedresource";



// ResourceIssue
/** 
 * Information about a resource with issue.
**/
export class ResourceIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockedResource" })
  blockedResource?: BlockedResource;
}
