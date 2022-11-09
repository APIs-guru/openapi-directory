import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2ArticleSuggestionModelMetadata } from "./googleclouddialogflowv2articlesuggestionmodelmetadata";
import { GoogleCloudDialogflowV2InputDataset } from "./googleclouddialogflowv2inputdataset";
import { GoogleCloudDialogflowV2SmartReplyModelMetadata } from "./googleclouddialogflowv2smartreplymodelmetadata";

export enum GoogleCloudDialogflowV2ConversationModelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Undeployed = "UNDEPLOYED"
,    Deploying = "DEPLOYING"
,    Deployed = "DEPLOYED"
,    Undeploying = "UNDEPLOYING"
,    Deleting = "DELETING"
,    Failed = "FAILED"
,    Pending = "PENDING"
}


// GoogleCloudDialogflowV2ConversationModel
/** 
 * Represents a conversation model.
**/
export class GoogleCloudDialogflowV2ConversationModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=articleSuggestionModelMetadata" })
  articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=datasets", elemType: shared.GoogleCloudDialogflowV2InputDataset })
  datasets?: GoogleCloudDialogflowV2InputDataset[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=smartReplyModelMetadata" })
  smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowV2ConversationModelStateEnum;
}
