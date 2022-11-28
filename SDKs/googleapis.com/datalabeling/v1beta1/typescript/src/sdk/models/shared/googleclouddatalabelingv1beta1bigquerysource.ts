import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1BigQuerySource
/** 
 * The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version.
**/
export class GoogleCloudDatalabelingV1beta1BigQuerySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;
}
