import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A knowledge base represents a collection of knowledge documents that you provide to Dialogflow. Your knowledge documents contain information that may be useful during conversations with end-users. Some Dialogflow features use knowledge bases when looking for a response to an end-user input. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
**/
export declare class GoogleCloudDialogflowV2beta1KnowledgeBase extends SpeakeasyBase {
    displayName?: string;
    languageCode?: string;
    name?: string;
}
