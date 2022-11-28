import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MediaAttachment
/** 
 * Class MediaAttachment.
**/
export class MediaAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecTag" })
  codecTag?: string;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryUrl" })
  deliveryUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=FileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=MimeType" })
  mimeType?: string;
}
