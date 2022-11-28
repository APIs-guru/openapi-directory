import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1beta1ReplayResult } from "./googlecloudpolicysimulatorv1beta1replayresult";
/**
 * Response message for Simulator.ListReplayResults.
**/
export declare class GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    replayResults?: GoogleCloudPolicysimulatorV1beta1ReplayResult[];
}
