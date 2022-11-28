import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";



// GoogleCloudDatalabelingV1beta1ImportDataRequest
/** 
 * Request message for ImportData API.
**/
export class GoogleCloudDatalabelingV1beta1ImportDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;

  @SpeakeasyMetadata({ data: "json, name=userEmailAddress" })
  userEmailAddress?: string;
}
