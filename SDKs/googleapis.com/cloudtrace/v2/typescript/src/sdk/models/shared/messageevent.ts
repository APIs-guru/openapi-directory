import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MessageEventTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Sent = "SENT"
,    Received = "RECEIVED"
}


// MessageEvent
/** 
 * An event describing a message sent/received between Spans.
**/
export class MessageEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=compressedSizeBytes" })
  compressedSizeBytes?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: MessageEventTypeEnum;

  @Metadata({ data: "json, name=uncompressedSizeBytes" })
  uncompressedSizeBytes?: string;
}
