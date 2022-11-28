import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata } from "./googlecloudcontactcenterinsightsv1analysisresultcallanalysismetadata";



// GoogleCloudContactcenterinsightsV1AnalysisResult
/** 
 * The result of an analysis.
**/
export class GoogleCloudContactcenterinsightsV1AnalysisResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callAnalysisMetadata" })
  callAnalysisMetadata?: GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;
}
