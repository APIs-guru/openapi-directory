import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2KnowledgeBase } from "./googleclouddialogflowv2knowledgebase";


// GoogleCloudDialogflowV2ListKnowledgeBasesResponse
/** 
 * Response message for KnowledgeBases.ListKnowledgeBases.
**/
export class GoogleCloudDialogflowV2ListKnowledgeBasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=knowledgeBases", elemType: shared.GoogleCloudDialogflowV2KnowledgeBase })
  knowledgeBases?: GoogleCloudDialogflowV2KnowledgeBase[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
