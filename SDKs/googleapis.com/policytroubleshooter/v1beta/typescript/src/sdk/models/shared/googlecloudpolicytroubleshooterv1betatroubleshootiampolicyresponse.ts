import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicytroubleshooterV1betaExplainedPolicy } from "./googlecloudpolicytroubleshooterv1betaexplainedpolicy";


export enum GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}


// GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
/** 
 * Response for TroubleshootIamPolicy.
**/
export class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=explainedPolicies", elemType: GoogleCloudPolicytroubleshooterV1betaExplainedPolicy })
  explainedPolicies?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicy[];
}
