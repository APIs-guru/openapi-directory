import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1KnowledgeBase } from "./googleclouddialogflowv2beta1knowledgebase";
/**
 * Response message for KnowledgeBases.ListKnowledgeBases.
**/
export declare class GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse extends SpeakeasyBase {
    knowledgeBases?: GoogleCloudDialogflowV2beta1KnowledgeBase[];
    nextPageToken?: string;
}
