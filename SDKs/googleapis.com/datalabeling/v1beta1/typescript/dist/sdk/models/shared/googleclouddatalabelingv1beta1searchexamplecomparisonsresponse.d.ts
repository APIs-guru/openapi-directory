import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ExampleComparison } from "./googleclouddatalabelingv1beta1examplecomparison";
/**
 * Results of searching example comparisons.
**/
export declare class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse extends SpeakeasyBase {
    exampleComparisons?: GoogleCloudDatalabelingV1beta1ExampleComparison[];
    nextPageToken?: string;
}
