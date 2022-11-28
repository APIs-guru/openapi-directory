import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1PredictionOutput
/** 
 * Represents results of a prediction job.
**/
export class GoogleCloudMlV1PredictionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCount" })
  errorCount?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeHours" })
  nodeHours?: number;

  @SpeakeasyMetadata({ data: "json, name=outputPath" })
  outputPath?: string;

  @SpeakeasyMetadata({ data: "json, name=predictionCount" })
  predictionCount?: string;
}
