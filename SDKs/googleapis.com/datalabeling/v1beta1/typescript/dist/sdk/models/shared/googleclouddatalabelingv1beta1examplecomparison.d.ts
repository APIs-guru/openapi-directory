import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Example } from "./googleclouddatalabelingv1beta1example";
/**
 * Example comparisons comparing ground truth output and predictions for a specific input.
**/
export declare class GoogleCloudDatalabelingV1beta1ExampleComparison extends SpeakeasyBase {
    groundTruthExample?: GoogleCloudDatalabelingV1beta1Example;
    modelCreatedExamples?: GoogleCloudDatalabelingV1beta1Example[];
}
