import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPolicytroubleshooterV1betaExplainedPolicy } from "./googlecloudpolicytroubleshooterv1betaexplainedpolicy";

export enum GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED"
,    Granted = "GRANTED"
,    NotGranted = "NOT_GRANTED"
,    UnknownConditional = "UNKNOWN_CONDITIONAL"
,    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}


// GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
/** 
 * Response for TroubleshootIamPolicy.
**/
export class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum;

  @Metadata({ data: "json, name=explainedPolicies", elemType: shared.GoogleCloudPolicytroubleshooterV1betaExplainedPolicy })
  explainedPolicies?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicy[];
}
