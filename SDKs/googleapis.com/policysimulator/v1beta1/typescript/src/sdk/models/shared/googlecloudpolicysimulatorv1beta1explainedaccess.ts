import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudPolicysimulatorV1beta1ExplainedPolicy } from "./googlecloudpolicysimulatorv1beta1explainedpolicy";


export enum GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}


// GoogleCloudPolicysimulatorV1beta1ExplainedAccess
/** 
 * Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
**/
export class GoogleCloudPolicysimulatorV1beta1ExplainedAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessState" })
  accessState?: GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GoogleRpcStatus })
  errors?: GoogleRpcStatus[];

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: GoogleCloudPolicysimulatorV1beta1ExplainedPolicy })
  policies?: GoogleCloudPolicysimulatorV1beta1ExplainedPolicy[];
}
