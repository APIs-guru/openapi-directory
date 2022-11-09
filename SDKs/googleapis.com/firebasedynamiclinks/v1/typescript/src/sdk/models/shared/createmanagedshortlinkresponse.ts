import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedShortLink } from "./managedshortlink";
import { DynamicLinkWarning } from "./dynamiclinkwarning";


// CreateManagedShortLinkResponse
/** 
 * Response to create a short Dynamic Link.
**/
export class CreateManagedShortLinkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=managedShortLink" })
  managedShortLink?: ManagedShortLink;

  @Metadata({ data: "json, name=previewLink" })
  previewLink?: string;

  @Metadata({ data: "json, name=warning", elemType: shared.DynamicLinkWarning })
  warning?: DynamicLinkWarning[];
}
