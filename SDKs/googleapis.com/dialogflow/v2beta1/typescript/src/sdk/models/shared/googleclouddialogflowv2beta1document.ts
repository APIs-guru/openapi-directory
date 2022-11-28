import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1DocumentReloadStatus } from "./googleclouddialogflowv2beta1documentreloadstatus";


export enum GoogleCloudDialogflowV2beta1DocumentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Reloading = "RELOADING",
    Deleting = "DELETING"
}

export enum GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED",
    Faq = "FAQ",
    ExtractiveQa = "EXTRACTIVE_QA",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY",
    SmartReply = "SMART_REPLY"
}


// GoogleCloudDialogflowV2beta1Document
/** 
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
**/
export class GoogleCloudDialogflowV2beta1Document extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableAutoReload" })
  enableAutoReload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=knowledgeTypes" })
  knowledgeTypes?: GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=latestReloadStatus" })
  latestReloadStatus?: GoogleCloudDialogflowV2beta1DocumentReloadStatus;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rawContent" })
  rawContent?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowV2beta1DocumentStateEnum;
}


// GoogleCloudDialogflowV2beta1DocumentInput
/** 
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
**/
export class GoogleCloudDialogflowV2beta1DocumentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableAutoReload" })
  enableAutoReload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=knowledgeTypes" })
  knowledgeTypes?: GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=latestReloadStatus" })
  latestReloadStatus?: GoogleCloudDialogflowV2beta1DocumentReloadStatus;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rawContent" })
  rawContent?: string;
}
