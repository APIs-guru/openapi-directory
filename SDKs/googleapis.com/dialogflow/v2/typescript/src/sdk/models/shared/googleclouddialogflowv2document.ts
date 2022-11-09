import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2DocumentReloadStatus } from "./googleclouddialogflowv2documentreloadstatus";

export enum GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED"
,    Faq = "FAQ"
,    ExtractiveQa = "EXTRACTIVE_QA"
,    ArticleSuggestion = "ARTICLE_SUGGESTION"
,    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY"
}

export enum GoogleCloudDialogflowV2DocumentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Updating = "UPDATING"
,    Reloading = "RELOADING"
,    Deleting = "DELETING"
}


// GoogleCloudDialogflowV2Document
/** 
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
**/
export class GoogleCloudDialogflowV2Document extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enableAutoReload" })
  enableAutoReload?: boolean;

  @Metadata({ data: "json, name=knowledgeTypes" })
  knowledgeTypes?: GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum[];

  @Metadata({ data: "json, name=latestReloadStatus" })
  latestReloadStatus?: GoogleCloudDialogflowV2DocumentReloadStatus;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rawContent" })
  rawContent?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowV2DocumentStateEnum;
}
