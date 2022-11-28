import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MessageEventTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Sent = "SENT",
    Received = "RECEIVED"
}


// MessageEvent
/** 
 * An event describing a message sent/received between Spans.
**/
export class MessageEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compressedSizeBytes" })
  compressedSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MessageEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uncompressedSizeBytes" })
  uncompressedSizeBytes?: string;
}
