import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicytroubleshooterV1AccessTuple } from "./googlecloudpolicytroubleshooterv1accesstuple";


// GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest
/** 
 * Request for TroubleshootIamPolicy.
**/
export class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTuple" })
  accessTuple?: GoogleCloudPolicytroubleshooterV1AccessTuple;
}
