import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PubsubConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED",
    Protobuf = "PROTOBUF",
    Json = "JSON"
}
/**
 * Configuration to publish a Cloud Pub/Sub message.
**/
export declare class PubsubConfig extends SpeakeasyBase {
    messageFormat?: PubsubConfigMessageFormatEnum;
    serviceAccountEmail?: string;
    topic?: string;
}
