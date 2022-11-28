import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2KnowledgeBase } from "./googleclouddialogflowv2knowledgebase";



// GoogleCloudDialogflowV2ListKnowledgeBasesResponse
/** 
 * Response message for KnowledgeBases.ListKnowledgeBases.
**/
export class GoogleCloudDialogflowV2ListKnowledgeBasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=knowledgeBases", elemType: GoogleCloudDialogflowV2KnowledgeBase })
  knowledgeBases?: GoogleCloudDialogflowV2KnowledgeBase[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
