import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1AccessStateDiff } from "./googlecloudpolicysimulatorv1accessstatediff";



// GoogleCloudPolicysimulatorV1ReplayDiff
/** 
 * The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a principal's access could change if the proposed policies were applied.
**/
export class GoogleCloudPolicysimulatorV1ReplayDiff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessDiff" })
  accessDiff?: GoogleCloudPolicysimulatorV1AccessStateDiff;
}
