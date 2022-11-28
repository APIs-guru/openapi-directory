import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkWarning } from "./dynamiclinkwarning";



// CreateShortDynamicLinkResponse
/** 
 * Response to create a short Dynamic Link.
**/
export class CreateShortDynamicLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=previewLink" })
  previewLink?: string;

  @SpeakeasyMetadata({ data: "json, name=shortLink" })
  shortLink?: string;

  @SpeakeasyMetadata({ data: "json, name=warning", elemType: DynamicLinkWarning })
  warning?: DynamicLinkWarning[];
}
