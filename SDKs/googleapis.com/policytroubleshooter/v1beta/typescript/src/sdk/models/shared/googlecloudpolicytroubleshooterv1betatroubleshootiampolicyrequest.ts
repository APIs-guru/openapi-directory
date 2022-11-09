import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicytroubleshooterV1betaAccessTuple } from "./googlecloudpolicytroubleshooterv1betaaccesstuple";


// GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest
/** 
 * Request for TroubleshootIamPolicy.
**/
export class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTuple" })
  accessTuple?: GoogleCloudPolicytroubleshooterV1betaAccessTuple;
}
