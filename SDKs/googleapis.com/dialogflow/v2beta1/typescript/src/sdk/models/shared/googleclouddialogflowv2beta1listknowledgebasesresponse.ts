import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1KnowledgeBase } from "./googleclouddialogflowv2beta1knowledgebase";



// GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse
/** 
 * Response message for KnowledgeBases.ListKnowledgeBases.
**/
export class GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=knowledgeBases", elemType: GoogleCloudDialogflowV2beta1KnowledgeBase })
  knowledgeBases?: GoogleCloudDialogflowV2beta1KnowledgeBase[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
