import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig
/** 
 * Configuration for analyses to run on each conversation message.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableEntityExtraction" })
  enableEntityExtraction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableSentimentAnalysis" })
  enableSentimentAnalysis?: boolean;
}
