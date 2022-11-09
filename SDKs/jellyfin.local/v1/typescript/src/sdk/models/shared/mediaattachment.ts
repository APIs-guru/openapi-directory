import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MediaAttachment
/** 
 * Class MediaAttachment.
**/
export class MediaAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Codec" })
  codec?: string;

  @Metadata({ data: "json, name=CodecTag" })
  codecTag?: string;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=DeliveryUrl" })
  deliveryUrl?: string;

  @Metadata({ data: "json, name=FileName" })
  fileName?: string;

  @Metadata({ data: "json, name=Index" })
  index?: number;

  @Metadata({ data: "json, name=MimeType" })
  mimeType?: string;
}
