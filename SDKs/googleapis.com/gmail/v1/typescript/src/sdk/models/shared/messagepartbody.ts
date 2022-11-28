import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MessagePartBody
/** 
 * The body of a single MIME message part.
**/
export class MessagePartBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}
