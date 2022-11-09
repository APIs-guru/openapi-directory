import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1AnalysisResult } from "./googlecloudcontactcenterinsightsv1analysisresult";


// GoogleCloudContactcenterinsightsV1Analysis
/** 
 * The analysis resource.
**/
export class GoogleCloudContactcenterinsightsV1Analysis extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisResult" })
  analysisResult?: GoogleCloudContactcenterinsightsV1AnalysisResult;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=requestTime" })
  requestTime?: string;
}
