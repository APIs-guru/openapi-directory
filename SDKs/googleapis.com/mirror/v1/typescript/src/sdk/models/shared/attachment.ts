import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Attachment
/** 
 * Represents media content, such as a photo, that can be attached to a timeline item.
**/
export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isProcessingContent" })
  isProcessingContent?: boolean;
}
