import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1ExampleComparison } from "./googleclouddatalabelingv1beta1examplecomparison";


// GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse
/** 
 * Results of searching example comparisons.
**/
export class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exampleComparisons", elemType: shared.GoogleCloudDatalabelingV1beta1ExampleComparison })
  exampleComparisons?: GoogleCloudDatalabelingV1beta1ExampleComparison[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
