import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessagePartBody } from "./messagepartbody";
import { MessagePartHeader } from "./messagepartheader";



// MessagePart
/** 
 * A single MIME message part.
**/
export class MessagePart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: MessagePartBody;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: MessagePartHeader })
  headers?: MessagePartHeader[];

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=partId" })
  partId?: string;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: MessagePart })
  parts?: MessagePart[];
}
