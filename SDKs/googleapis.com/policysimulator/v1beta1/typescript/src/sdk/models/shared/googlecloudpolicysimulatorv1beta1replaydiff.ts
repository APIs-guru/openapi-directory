import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicysimulatorV1beta1AccessStateDiff } from "./googlecloudpolicysimulatorv1beta1accessstatediff";


// GoogleCloudPolicysimulatorV1beta1ReplayDiff
/** 
 * The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a member's access could change if the proposed policies were applied.
**/
export class GoogleCloudPolicysimulatorV1beta1ReplayDiff extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessDiff" })
  accessDiff?: GoogleCloudPolicysimulatorV1beta1AccessStateDiff;
}
