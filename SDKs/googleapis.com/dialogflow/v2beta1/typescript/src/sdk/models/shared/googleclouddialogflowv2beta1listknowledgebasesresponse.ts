import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1KnowledgeBase } from "./googleclouddialogflowv2beta1knowledgebase";


// GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse
/** 
 * Response message for KnowledgeBases.ListKnowledgeBases.
**/
export class GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=knowledgeBases", elemType: shared.GoogleCloudDialogflowV2beta1KnowledgeBase })
  knowledgeBases?: GoogleCloudDialogflowV2beta1KnowledgeBase[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
