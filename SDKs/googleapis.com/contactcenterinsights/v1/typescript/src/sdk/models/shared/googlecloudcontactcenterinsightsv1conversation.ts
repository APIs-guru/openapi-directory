import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1ConversationCallMetadata } from "./googlecloudcontactcenterinsightsv1conversationcallmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationDataSource } from "./googlecloudcontactcenterinsightsv1conversationdatasource";
import { GoogleCloudContactcenterinsightsV1DialogflowIntent } from "./googlecloudcontactcenterinsightsv1dialogflowintent";
import { GoogleCloudContactcenterinsightsV1Analysis } from "./googlecloudcontactcenterinsightsv1analysis";
import { GoogleCloudContactcenterinsightsV1RuntimeAnnotation } from "./googlecloudcontactcenterinsightsv1runtimeannotation";
import { GoogleCloudContactcenterinsightsV1ConversationTranscript } from "./googlecloudcontactcenterinsightsv1conversationtranscript";

export enum GoogleCloudContactcenterinsightsV1ConversationMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED"
,    PhoneCall = "PHONE_CALL"
,    Chat = "CHAT"
}


// GoogleCloudContactcenterinsightsV1Conversation
/** 
 * The conversation resource.
**/
export class GoogleCloudContactcenterinsightsV1Conversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentId" })
  agentId?: string;

  @Metadata({ data: "json, name=callMetadata" })
  callMetadata?: GoogleCloudContactcenterinsightsV1ConversationCallMetadata;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataSource" })
  dataSource?: GoogleCloudContactcenterinsightsV1ConversationDataSource;

  @Metadata({ data: "json, name=dialogflowIntents", elemType: shared.GoogleCloudContactcenterinsightsV1DialogflowIntent })
  dialogflowIntents?: Map<string, GoogleCloudContactcenterinsightsV1DialogflowIntent>;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=latestAnalysis" })
  latestAnalysis?: GoogleCloudContactcenterinsightsV1Analysis;

  @Metadata({ data: "json, name=medium" })
  medium?: GoogleCloudContactcenterinsightsV1ConversationMediumEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=obfuscatedUserId" })
  obfuscatedUserId?: string;

  @Metadata({ data: "json, name=runtimeAnnotations", elemType: shared.GoogleCloudContactcenterinsightsV1RuntimeAnnotation })
  runtimeAnnotations?: GoogleCloudContactcenterinsightsV1RuntimeAnnotation[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=transcript" })
  transcript?: GoogleCloudContactcenterinsightsV1ConversationTranscript;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;

  @Metadata({ data: "json, name=turnCount" })
  turnCount?: number;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
