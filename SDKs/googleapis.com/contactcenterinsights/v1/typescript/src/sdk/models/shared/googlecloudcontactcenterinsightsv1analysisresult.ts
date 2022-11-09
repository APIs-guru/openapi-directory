import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata } from "./googlecloudcontactcenterinsightsv1analysisresultcallanalysismetadata";


// GoogleCloudContactcenterinsightsV1AnalysisResult
/** 
 * The result of an analysis.
**/
export class GoogleCloudContactcenterinsightsV1AnalysisResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=callAnalysisMetadata" })
  callAnalysisMetadata?: GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;
}
