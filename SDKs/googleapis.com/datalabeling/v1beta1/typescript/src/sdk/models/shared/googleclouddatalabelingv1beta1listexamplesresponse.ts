import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Example } from "./googleclouddatalabelingv1beta1example";



// GoogleCloudDatalabelingV1beta1ListExamplesResponse
/** 
 * Results of listing Examples in and annotated dataset.
**/
export class GoogleCloudDatalabelingV1beta1ListExamplesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=examples", elemType: GoogleCloudDatalabelingV1beta1Example })
  examples?: GoogleCloudDatalabelingV1beta1Example[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
