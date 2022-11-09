import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1Example } from "./googleclouddatalabelingv1beta1example";


// GoogleCloudDatalabelingV1beta1ListExamplesResponse
/** 
 * Results of listing Examples in and annotated dataset.
**/
export class GoogleCloudDatalabelingV1beta1ListExamplesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=examples", elemType: shared.GoogleCloudDatalabelingV1beta1Example })
  examples?: GoogleCloudDatalabelingV1beta1Example[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
