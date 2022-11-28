import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1beta1BindingExplanation } from "./googlecloudpolicysimulatorv1beta1bindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";


export enum GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}


// GoogleCloudPolicysimulatorV1beta1ExplainedPolicy
/** 
 * Details about how a specific IAM Policy contributed to the access check.
**/
export class GoogleCloudPolicysimulatorV1beta1ExplainedPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=bindingExplanations", elemType: GoogleCloudPolicysimulatorV1beta1BindingExplanation })
  bindingExplanations?: GoogleCloudPolicysimulatorV1beta1BindingExplanation[];

  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: GoogleIamV1Policy;

  @SpeakeasyMetadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum;
}
