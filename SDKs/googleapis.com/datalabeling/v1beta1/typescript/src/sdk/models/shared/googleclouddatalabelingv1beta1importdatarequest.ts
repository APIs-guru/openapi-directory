import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";


// GoogleCloudDatalabelingV1beta1ImportDataRequest
/** 
 * Request message for ImportData API.
**/
export class GoogleCloudDatalabelingV1beta1ImportDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;

  @Metadata({ data: "json, name=userEmailAddress" })
  userEmailAddress?: string;
}
