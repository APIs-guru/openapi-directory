import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1ReplayConfig } from "./googlecloudpolicysimulatorv1replayconfig";
import { GoogleCloudPolicysimulatorV1ReplayResultsSummary } from "./googlecloudpolicysimulatorv1replayresultssummary";



// GoogleCloudPolicysimulatorV1ReplayInput
/** 
 * A resource describing a `Replay`, or simulation.
**/
export class GoogleCloudPolicysimulatorV1ReplayInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudPolicysimulatorV1ReplayConfig;

  @SpeakeasyMetadata({ data: "json, name=resultsSummary" })
  resultsSummary?: GoogleCloudPolicysimulatorV1ReplayResultsSummary;
}
