import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudPolicysimulatorV1ExplainedPolicy } from "./googlecloudpolicysimulatorv1explainedpolicy";

export enum GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED"
,    Granted = "GRANTED"
,    NotGranted = "NOT_GRANTED"
,    UnknownConditional = "UNKNOWN_CONDITIONAL"
,    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}


// GoogleCloudPolicysimulatorV1ExplainedAccess
/** 
 * Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
**/
export class GoogleCloudPolicysimulatorV1ExplainedAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessState" })
  accessState?: GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum;

  @Metadata({ data: "json, name=errors", elemType: shared.GoogleRpcStatus })
  errors?: GoogleRpcStatus[];

  @Metadata({ data: "json, name=policies", elemType: shared.GoogleCloudPolicysimulatorV1ExplainedPolicy })
  policies?: GoogleCloudPolicysimulatorV1ExplainedPolicy[];
}
