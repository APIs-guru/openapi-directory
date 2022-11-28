import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ArticleSuggestionModelMetadata } from "./googleclouddialogflowv2articlesuggestionmodelmetadata";
import { GoogleCloudDialogflowV2InputDataset } from "./googleclouddialogflowv2inputdataset";
import { GoogleCloudDialogflowV2SmartReplyModelMetadata } from "./googleclouddialogflowv2smartreplymodelmetadata";


export enum GoogleCloudDialogflowV2ConversationModelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Undeployed = "UNDEPLOYED",
    Deploying = "DEPLOYING",
    Deployed = "DEPLOYED",
    Undeploying = "UNDEPLOYING",
    Deleting = "DELETING",
    Failed = "FAILED",
    Pending = "PENDING"
}


// GoogleCloudDialogflowV2ConversationModelInput
/** 
 * Represents a conversation model.
**/
export class GoogleCloudDialogflowV2ConversationModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articleSuggestionModelMetadata" })
  articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;

  @SpeakeasyMetadata({ data: "json, name=datasets", elemType: GoogleCloudDialogflowV2InputDataset })
  datasets?: GoogleCloudDialogflowV2InputDataset[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=smartReplyModelMetadata" })
  smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
}


// GoogleCloudDialogflowV2ConversationModel
/** 
 * Represents a conversation model.
**/
export class GoogleCloudDialogflowV2ConversationModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articleSuggestionModelMetadata" })
  articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=datasets", elemType: GoogleCloudDialogflowV2InputDataset })
  datasets?: GoogleCloudDialogflowV2InputDataset[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=smartReplyModelMetadata" })
  smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowV2ConversationModelStateEnum;
}
