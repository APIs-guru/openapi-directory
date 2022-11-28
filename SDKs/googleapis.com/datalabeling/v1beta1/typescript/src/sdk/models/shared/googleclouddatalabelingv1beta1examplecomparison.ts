import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Example } from "./googleclouddatalabelingv1beta1example";



// GoogleCloudDatalabelingV1beta1ExampleComparison
/** 
 * Example comparisons comparing ground truth output and predictions for a specific input.
**/
export class GoogleCloudDatalabelingV1beta1ExampleComparison extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groundTruthExample" })
  groundTruthExample?: GoogleCloudDatalabelingV1beta1Example;

  @SpeakeasyMetadata({ data: "json, name=modelCreatedExamples", elemType: GoogleCloudDatalabelingV1beta1Example })
  modelCreatedExamples?: GoogleCloudDatalabelingV1beta1Example[];
}
