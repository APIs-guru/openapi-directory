import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessagePart } from "./messagepart";



// Message
/** 
 * An email message.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=internalDate" })
  internalDate?: string;

  @SpeakeasyMetadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: MessagePart;

  @SpeakeasyMetadata({ data: "json, name=raw" })
  raw?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeEstimate" })
  sizeEstimate?: number;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;

  @SpeakeasyMetadata({ data: "json, name=threadId" })
  threadId?: string;
}
