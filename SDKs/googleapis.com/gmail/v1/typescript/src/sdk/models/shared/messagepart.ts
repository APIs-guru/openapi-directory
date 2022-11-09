import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MessagePartBody } from "./messagepartbody";
import { MessagePartHeader } from "./messagepartheader";
import { MessagePart } from "./messagepart";


// MessagePart
/** 
 * A single MIME message part.
**/
export class MessagePart extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: MessagePartBody;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.MessagePartHeader })
  headers?: MessagePartHeader[];

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=partId" })
  partId?: string;

  @Metadata({ data: "json, name=parts", elemType: shared.MessagePart })
  parts?: MessagePart[];
}
