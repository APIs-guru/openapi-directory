import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Attachment
/** 
 * Represents media content, such as a photo, that can be attached to a timeline item.
**/
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isProcessingContent" })
  isProcessingContent?: boolean;
}
