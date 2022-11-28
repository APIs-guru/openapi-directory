import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1ReplayResult } from "./googlecloudpolicysimulatorv1replayresult";
/**
 * Response message for Simulator.ListReplayResults.
**/
export declare class GoogleCloudPolicysimulatorV1ListReplayResultsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    replayResults?: GoogleCloudPolicysimulatorV1ReplayResult[];
}
