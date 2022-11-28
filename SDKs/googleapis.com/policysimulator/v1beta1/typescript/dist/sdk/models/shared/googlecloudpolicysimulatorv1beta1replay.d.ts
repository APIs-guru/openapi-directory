import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1beta1ReplayConfig } from "./googlecloudpolicysimulatorv1beta1replayconfig";
import { GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary } from "./googlecloudpolicysimulatorv1beta1replayresultssummary";
/**
 * A resource describing a `Replay`, or simulation.
**/
export declare class GoogleCloudPolicysimulatorV1beta1ReplayInput extends SpeakeasyBase {
    config?: GoogleCloudPolicysimulatorV1beta1ReplayConfig;
    resultsSummary?: GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary;
}
