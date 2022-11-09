import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1Example } from "./googleclouddatalabelingv1beta1example";
import { GoogleCloudDatalabelingV1beta1Example } from "./googleclouddatalabelingv1beta1example";


// GoogleCloudDatalabelingV1beta1ExampleComparison
/** 
 * Example comparisons comparing ground truth output and predictions for a specific input.
**/
export class GoogleCloudDatalabelingV1beta1ExampleComparison extends SpeakeasyBase {
  @Metadata({ data: "json, name=groundTruthExample" })
  groundTruthExample?: GoogleCloudDatalabelingV1beta1Example;

  @Metadata({ data: "json, name=modelCreatedExamples", elemType: shared.GoogleCloudDatalabelingV1beta1Example })
  modelCreatedExamples?: GoogleCloudDatalabelingV1beta1Example[];
}
