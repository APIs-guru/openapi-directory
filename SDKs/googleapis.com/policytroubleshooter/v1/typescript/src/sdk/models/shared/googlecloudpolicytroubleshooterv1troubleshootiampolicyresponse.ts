import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudPolicytroubleshooterV1ExplainedPolicy } from "./googlecloudpolicytroubleshooterv1explainedpolicy";

export enum GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED"
,    Granted = "GRANTED"
,    NotGranted = "NOT_GRANTED"
,    UnknownConditional = "UNKNOWN_CONDITIONAL"
,    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}


// GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
/** 
 * Response for TroubleshootIamPolicy.
**/
export class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum;

  @Metadata({ data: "json, name=errors", elemType: shared.GoogleRpcStatus })
  errors?: GoogleRpcStatus[];

  @Metadata({ data: "json, name=explainedPolicies", elemType: shared.GoogleCloudPolicytroubleshooterV1ExplainedPolicy })
  explainedPolicies?: GoogleCloudPolicytroubleshooterV1ExplainedPolicy[];
}
