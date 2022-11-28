import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ConversationCallMetadata } from "./googlecloudcontactcenterinsightsv1conversationcallmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationDataSource } from "./googlecloudcontactcenterinsightsv1conversationdatasource";
import { GoogleCloudContactcenterinsightsV1DialogflowIntent } from "./googlecloudcontactcenterinsightsv1dialogflowintent";
import { GoogleCloudContactcenterinsightsV1Analysis } from "./googlecloudcontactcenterinsightsv1analysis";
import { GoogleCloudContactcenterinsightsV1RuntimeAnnotation } from "./googlecloudcontactcenterinsightsv1runtimeannotation";
import { GoogleCloudContactcenterinsightsV1ConversationTranscript } from "./googlecloudcontactcenterinsightsv1conversationtranscript";
import { GoogleCloudContactcenterinsightsV1ConversationDataSourceInput } from "./googlecloudcontactcenterinsightsv1conversationdatasource";
import { GoogleCloudContactcenterinsightsV1AnalysisInput } from "./googlecloudcontactcenterinsightsv1analysis";


export enum GoogleCloudContactcenterinsightsV1ConversationMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED",
    PhoneCall = "PHONE_CALL",
    Chat = "CHAT"
}


// GoogleCloudContactcenterinsightsV1Conversation
/** 
 * The conversation resource.
**/
export class GoogleCloudContactcenterinsightsV1Conversation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentId" })
  agentId?: string;

  @SpeakeasyMetadata({ data: "json, name=callMetadata" })
  callMetadata?: GoogleCloudContactcenterinsightsV1ConversationCallMetadata;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: GoogleCloudContactcenterinsightsV1ConversationDataSource;

  @SpeakeasyMetadata({ data: "json, name=dialogflowIntents", elemType: GoogleCloudContactcenterinsightsV1DialogflowIntent })
  dialogflowIntents?: Map<string, GoogleCloudContactcenterinsightsV1DialogflowIntent>;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=latestAnalysis" })
  latestAnalysis?: GoogleCloudContactcenterinsightsV1Analysis;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: GoogleCloudContactcenterinsightsV1ConversationMediumEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedUserId" })
  obfuscatedUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeAnnotations", elemType: GoogleCloudContactcenterinsightsV1RuntimeAnnotation })
  runtimeAnnotations?: GoogleCloudContactcenterinsightsV1RuntimeAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=transcript" })
  transcript?: GoogleCloudContactcenterinsightsV1ConversationTranscript;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=turnCount" })
  turnCount?: number;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudContactcenterinsightsV1ConversationInput
/** 
 * The conversation resource.
**/
export class GoogleCloudContactcenterinsightsV1ConversationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentId" })
  agentId?: string;

  @SpeakeasyMetadata({ data: "json, name=callMetadata" })
  callMetadata?: GoogleCloudContactcenterinsightsV1ConversationCallMetadata;

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: GoogleCloudContactcenterinsightsV1ConversationDataSourceInput;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=latestAnalysis" })
  latestAnalysis?: GoogleCloudContactcenterinsightsV1AnalysisInput;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: GoogleCloudContactcenterinsightsV1ConversationMediumEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedUserId" })
  obfuscatedUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=transcript" })
  transcript?: GoogleCloudContactcenterinsightsV1ConversationTranscript;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
