import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1BindingExplanation } from "./googlecloudpolicysimulatorv1bindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";


export enum GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}


// GoogleCloudPolicysimulatorV1ExplainedPolicy
/** 
 * Details about how a specific IAM Policy contributed to the access check.
**/
export class GoogleCloudPolicysimulatorV1ExplainedPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=bindingExplanations", elemType: GoogleCloudPolicysimulatorV1BindingExplanation })
  bindingExplanations?: GoogleCloudPolicysimulatorV1BindingExplanation[];

  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: GoogleIamV1Policy;

  @SpeakeasyMetadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum;
}
