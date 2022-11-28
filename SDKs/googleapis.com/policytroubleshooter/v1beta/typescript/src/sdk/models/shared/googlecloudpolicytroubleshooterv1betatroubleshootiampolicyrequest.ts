import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicytroubleshooterV1betaAccessTuple } from "./googlecloudpolicytroubleshooterv1betaaccesstuple";



// GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest
/** 
 * Request for TroubleshootIamPolicy.
**/
export class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTuple" })
  accessTuple?: GoogleCloudPolicytroubleshooterV1betaAccessTuple;
}
