import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest
/** 
 * The request to analyze conversations in bulk.
**/
export class GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisPercentage" })
  analysisPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
