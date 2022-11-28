import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicytroubleshooterV1betaBindingExplanation } from "./googlecloudpolicytroubleshooterv1betabindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";


export enum GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}


// GoogleCloudPolicytroubleshooterV1betaExplainedPolicy
/** 
 * Details about how a specific IAM Policy contributed to the access check.
**/
export class GoogleCloudPolicytroubleshooterV1betaExplainedPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=bindingExplanations", elemType: GoogleCloudPolicytroubleshooterV1betaBindingExplanation })
  bindingExplanations?: GoogleCloudPolicytroubleshooterV1betaBindingExplanation[];

  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: GoogleIamV1Policy;

  @SpeakeasyMetadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum;
}
