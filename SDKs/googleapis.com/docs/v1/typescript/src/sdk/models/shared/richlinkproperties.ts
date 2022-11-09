import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RichLinkProperties
/** 
 * Properties specific to a RichLink.
**/
export class RichLinkProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
