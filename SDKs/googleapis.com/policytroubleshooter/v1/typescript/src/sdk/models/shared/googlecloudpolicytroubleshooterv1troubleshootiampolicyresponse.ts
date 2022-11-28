import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudPolicytroubleshooterV1ExplainedPolicy } from "./googlecloudpolicytroubleshooterv1explainedpolicy";


export enum GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}


// GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
/** 
 * Response for TroubleshootIamPolicy.
**/
export class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GoogleRpcStatus })
  errors?: GoogleRpcStatus[];

  @SpeakeasyMetadata({ data: "json, name=explainedPolicies", elemType: GoogleCloudPolicytroubleshooterV1ExplainedPolicy })
  explainedPolicies?: GoogleCloudPolicytroubleshooterV1ExplainedPolicy[];
}
