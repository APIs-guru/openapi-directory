import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPolicytroubleshooterV1BindingExplanation } from "./googlecloudpolicytroubleshooterv1bindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";

export enum GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED"
,    Granted = "GRANTED"
,    NotGranted = "NOT_GRANTED"
,    UnknownConditional = "UNKNOWN_CONDITIONAL"
,    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED"
,    Normal = "NORMAL"
,    High = "HIGH"
}


// GoogleCloudPolicytroubleshooterV1ExplainedPolicy
/** 
 * Details about how a specific IAM Policy contributed to the access check.
**/
export class GoogleCloudPolicytroubleshooterV1ExplainedPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum;

  @Metadata({ data: "json, name=bindingExplanations", elemType: shared.GoogleCloudPolicytroubleshooterV1BindingExplanation })
  bindingExplanations?: GoogleCloudPolicytroubleshooterV1BindingExplanation[];

  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: GoogleIamV1Policy;

  @Metadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum;
}
