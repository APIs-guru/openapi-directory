import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RichLinkProperties
/** 
 * Properties specific to a RichLink.
**/
export class RichLinkProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
