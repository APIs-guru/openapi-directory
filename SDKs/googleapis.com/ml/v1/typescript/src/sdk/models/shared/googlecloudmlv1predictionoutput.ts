import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1PredictionOutput
/** 
 * Represents results of a prediction job.
**/
export class GoogleCloudMlV1PredictionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCount" })
  errorCount?: string;

  @Metadata({ data: "json, name=nodeHours" })
  nodeHours?: number;

  @Metadata({ data: "json, name=outputPath" })
  outputPath?: string;

  @Metadata({ data: "json, name=predictionCount" })
  predictionCount?: string;
}
