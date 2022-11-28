import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MessageEventTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Sent = "SENT",
    Received = "RECEIVED"
}
/**
 * An event describing a message sent/received between Spans.
**/
export declare class MessageEvent extends SpeakeasyBase {
    compressedSizeBytes?: string;
    id?: string;
    type?: MessageEventTypeEnum;
    uncompressedSizeBytes?: string;
}
