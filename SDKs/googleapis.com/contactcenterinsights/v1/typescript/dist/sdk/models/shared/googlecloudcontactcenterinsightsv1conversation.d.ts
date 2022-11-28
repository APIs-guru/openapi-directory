import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ConversationCallMetadata } from "./googlecloudcontactcenterinsightsv1conversationcallmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationDataSource } from "./googlecloudcontactcenterinsightsv1conversationdatasource";
import { GoogleCloudContactcenterinsightsV1DialogflowIntent } from "./googlecloudcontactcenterinsightsv1dialogflowintent";
import { GoogleCloudContactcenterinsightsV1Analysis } from "./googlecloudcontactcenterinsightsv1analysis";
import { GoogleCloudContactcenterinsightsV1RuntimeAnnotation } from "./googlecloudcontactcenterinsightsv1runtimeannotation";
import { GoogleCloudContactcenterinsightsV1ConversationTranscript } from "./googlecloudcontactcenterinsightsv1conversationtranscript";
import { GoogleCloudContactcenterinsightsV1ConversationDataSourceInput } from "./googlecloudcontactcenterinsightsv1conversationdatasource";
import { GoogleCloudContactcenterinsightsV1AnalysisInput } from "./googlecloudcontactcenterinsightsv1analysis";
export declare enum GoogleCloudContactcenterinsightsV1ConversationMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED",
    PhoneCall = "PHONE_CALL",
    Chat = "CHAT"
}
/**
 * The conversation resource.
**/
export declare class GoogleCloudContactcenterinsightsV1Conversation extends SpeakeasyBase {
    agentId?: string;
    callMetadata?: GoogleCloudContactcenterinsightsV1ConversationCallMetadata;
    createTime?: string;
    dataSource?: GoogleCloudContactcenterinsightsV1ConversationDataSource;
    dialogflowIntents?: Map<string, GoogleCloudContactcenterinsightsV1DialogflowIntent>;
    duration?: string;
    expireTime?: string;
    labels?: Map<string, string>;
    languageCode?: string;
    latestAnalysis?: GoogleCloudContactcenterinsightsV1Analysis;
    medium?: GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
    name?: string;
    obfuscatedUserId?: string;
    runtimeAnnotations?: GoogleCloudContactcenterinsightsV1RuntimeAnnotation[];
    startTime?: string;
    transcript?: GoogleCloudContactcenterinsightsV1ConversationTranscript;
    ttl?: string;
    turnCount?: number;
    updateTime?: string;
}
/**
 * The conversation resource.
**/
export declare class GoogleCloudContactcenterinsightsV1ConversationInput extends SpeakeasyBase {
    agentId?: string;
    callMetadata?: GoogleCloudContactcenterinsightsV1ConversationCallMetadata;
    dataSource?: GoogleCloudContactcenterinsightsV1ConversationDataSourceInput;
    expireTime?: string;
    labels?: Map<string, string>;
    languageCode?: string;
    latestAnalysis?: GoogleCloudContactcenterinsightsV1AnalysisInput;
    medium?: GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
    name?: string;
    obfuscatedUserId?: string;
    startTime?: string;
    transcript?: GoogleCloudContactcenterinsightsV1ConversationTranscript;
    ttl?: string;
}
