import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPolicytroubleshooterV1betaBindingExplanation } from "./googlecloudpolicytroubleshooterv1betabindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";

export enum GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED"
,    Granted = "GRANTED"
,    NotGranted = "NOT_GRANTED"
,    UnknownConditional = "UNKNOWN_CONDITIONAL"
,    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED"
,    Normal = "NORMAL"
,    High = "HIGH"
}


// GoogleCloudPolicytroubleshooterV1betaExplainedPolicy
/** 
 * Details about how a specific IAM Policy contributed to the access check.
**/
export class GoogleCloudPolicytroubleshooterV1betaExplainedPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum;

  @Metadata({ data: "json, name=bindingExplanations", elemType: shared.GoogleCloudPolicytroubleshooterV1betaBindingExplanation })
  bindingExplanations?: GoogleCloudPolicytroubleshooterV1betaBindingExplanation[];

  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: GoogleIamV1Policy;

  @Metadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum;
}
