import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MessagePartBody
/** 
 * The body of a single MIME message part.
**/
export class MessagePartBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;
}
