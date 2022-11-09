import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessagePart } from "./messagepart";


// Message
/** 
 * An email message.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=internalDate" })
  internalDate?: string;

  @Metadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @Metadata({ data: "json, name=payload" })
  payload?: MessagePart;

  @Metadata({ data: "json, name=raw" })
  raw?: string;

  @Metadata({ data: "json, name=sizeEstimate" })
  sizeEstimate?: number;

  @Metadata({ data: "json, name=snippet" })
  snippet?: string;

  @Metadata({ data: "json, name=threadId" })
  threadId?: string;
}
