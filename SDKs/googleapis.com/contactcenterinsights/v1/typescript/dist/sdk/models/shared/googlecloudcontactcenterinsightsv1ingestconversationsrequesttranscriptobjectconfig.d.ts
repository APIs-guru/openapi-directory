import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED",
    PhoneCall = "PHONE_CALL",
    Chat = "CHAT"
}
/**
 * Configuration for processing transcript objects.
**/
export declare class GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig extends SpeakeasyBase {
    medium?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum;
}
