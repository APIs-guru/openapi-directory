import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2KnowledgeBase } from "./googleclouddialogflowv2knowledgebase";
/**
 * Response message for KnowledgeBases.ListKnowledgeBases.
**/
export declare class GoogleCloudDialogflowV2ListKnowledgeBasesResponse extends SpeakeasyBase {
    knowledgeBases?: GoogleCloudDialogflowV2KnowledgeBase[];
    nextPageToken?: string;
}
