import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ExampleComparison } from "./googleclouddatalabelingv1beta1examplecomparison";



// GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse
/** 
 * Results of searching example comparisons.
**/
export class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exampleComparisons", elemType: GoogleCloudDatalabelingV1beta1ExampleComparison })
  exampleComparisons?: GoogleCloudDatalabelingV1beta1ExampleComparison[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
