import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DynamicLinkWarning } from "./dynamiclinkwarning";


// CreateShortDynamicLinkResponse
/** 
 * Response to create a short Dynamic Link.
**/
export class CreateShortDynamicLinkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=previewLink" })
  previewLink?: string;

  @Metadata({ data: "json, name=shortLink" })
  shortLink?: string;

  @Metadata({ data: "json, name=warning", elemType: shared.DynamicLinkWarning })
  warning?: DynamicLinkWarning[];
}
