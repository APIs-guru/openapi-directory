import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PubsubConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED",
    Protobuf = "PROTOBUF",
    Json = "JSON"
}


// PubsubConfig
/** 
 * Configuration to publish a Cloud Pub/Sub message.
**/
export class PubsubConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageFormat" })
  messageFormat?: PubsubConfigMessageFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
