import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig
/** 
 * Configuration for analyses to run on each conversation message.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableEntityExtraction" })
  enableEntityExtraction?: boolean;

  @Metadata({ data: "json, name=enableSentimentAnalysis" })
  enableSentimentAnalysis?: boolean;
}
