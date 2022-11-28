import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1beta1ReplayConfig } from "./googlecloudpolicysimulatorv1beta1replayconfig";
import { GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary } from "./googlecloudpolicysimulatorv1beta1replayresultssummary";



// GoogleCloudPolicysimulatorV1beta1ReplayInput
/** 
 * A resource describing a `Replay`, or simulation.
**/
export class GoogleCloudPolicysimulatorV1beta1ReplayInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudPolicysimulatorV1beta1ReplayConfig;

  @SpeakeasyMetadata({ data: "json, name=resultsSummary" })
  resultsSummary?: GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary;
}
