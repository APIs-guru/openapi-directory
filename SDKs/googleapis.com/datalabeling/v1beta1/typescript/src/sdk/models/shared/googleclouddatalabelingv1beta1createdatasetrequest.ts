import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Dataset } from "./googleclouddatalabelingv1beta1dataset";



// GoogleCloudDatalabelingV1beta1CreateDatasetRequest
/** 
 * Request message for CreateDataset.
**/
export class GoogleCloudDatalabelingV1beta1CreateDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: GoogleCloudDatalabelingV1beta1Dataset;
}
