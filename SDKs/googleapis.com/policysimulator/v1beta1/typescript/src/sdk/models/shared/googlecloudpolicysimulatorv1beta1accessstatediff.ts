import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1beta1ExplainedAccess } from "./googlecloudpolicysimulatorv1beta1explainedaccess";


export enum GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum {
    AccessChangeTypeUnspecified = "ACCESS_CHANGE_TYPE_UNSPECIFIED",
    NoChange = "NO_CHANGE",
    UnknownChange = "UNKNOWN_CHANGE",
    AccessRevoked = "ACCESS_REVOKED",
    AccessGained = "ACCESS_GAINED",
    AccessMaybeRevoked = "ACCESS_MAYBE_REVOKED",
    AccessMaybeGained = "ACCESS_MAYBE_GAINED"
}


// GoogleCloudPolicysimulatorV1beta1AccessStateDiff
/** 
 * A summary and comparison of the member's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.
**/
export class GoogleCloudPolicysimulatorV1beta1AccessStateDiff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessChange" })
  accessChange?: GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum;

  @SpeakeasyMetadata({ data: "json, name=baseline" })
  baseline?: GoogleCloudPolicysimulatorV1beta1ExplainedAccess;

  @SpeakeasyMetadata({ data: "json, name=simulated" })
  simulated?: GoogleCloudPolicysimulatorV1beta1ExplainedAccess;
}
