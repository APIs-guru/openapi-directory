import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceSelector
/** 
 * Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects.
**/
export class ResourceSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}
