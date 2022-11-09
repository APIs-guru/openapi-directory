import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PubsubConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED"
,    Protobuf = "PROTOBUF"
,    Json = "JSON"
}


// PubsubConfig
/** 
 * Configuration to publish a Cloud Pub/Sub message.
**/
export class PubsubConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageFormat" })
  messageFormat?: PubsubConfigMessageFormatEnum;

  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
