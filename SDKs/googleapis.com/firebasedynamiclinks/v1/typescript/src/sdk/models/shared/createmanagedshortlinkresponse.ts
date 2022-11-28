import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedShortLink } from "./managedshortlink";
import { DynamicLinkWarning } from "./dynamiclinkwarning";



// CreateManagedShortLinkResponse
/** 
 * Response to create a short Dynamic Link.
**/
export class CreateManagedShortLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=managedShortLink" })
  managedShortLink?: ManagedShortLink;

  @SpeakeasyMetadata({ data: "json, name=previewLink" })
  previewLink?: string;

  @SpeakeasyMetadata({ data: "json, name=warning", elemType: DynamicLinkWarning })
  warning?: DynamicLinkWarning[];
}
