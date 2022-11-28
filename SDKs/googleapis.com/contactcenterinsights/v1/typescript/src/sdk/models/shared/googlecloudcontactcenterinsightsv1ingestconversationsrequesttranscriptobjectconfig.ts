import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED",
    PhoneCall = "PHONE_CALL",
    Chat = "CHAT"
}


// GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig
/** 
 * Configuration for processing transcript objects.
**/
export class GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum;
}
