import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPolicysimulatorV1beta1BindingExplanation } from "./googlecloudpolicysimulatorv1beta1bindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";

export enum GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED"
,    Granted = "GRANTED"
,    NotGranted = "NOT_GRANTED"
,    UnknownConditional = "UNKNOWN_CONDITIONAL"
,    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}

export enum GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED"
,    Normal = "NORMAL"
,    High = "HIGH"
}


// GoogleCloudPolicysimulatorV1beta1ExplainedPolicy
/** 
 * Details about how a specific IAM Policy contributed to the access check.
**/
export class GoogleCloudPolicysimulatorV1beta1ExplainedPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum;

  @Metadata({ data: "json, name=bindingExplanations", elemType: shared.GoogleCloudPolicysimulatorV1beta1BindingExplanation })
  bindingExplanations?: GoogleCloudPolicysimulatorV1beta1BindingExplanation[];

  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: GoogleIamV1Policy;

  @Metadata({ data: "json, name=relevance" })
  relevance?: GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum;
}
