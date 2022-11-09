import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1Dataset } from "./googleclouddatalabelingv1beta1dataset";


// GoogleCloudDatalabelingV1beta1CreateDatasetRequest
/** 
 * Request message for CreateDataset.
**/
export class GoogleCloudDatalabelingV1beta1CreateDatasetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: GoogleCloudDatalabelingV1beta1Dataset;
}
