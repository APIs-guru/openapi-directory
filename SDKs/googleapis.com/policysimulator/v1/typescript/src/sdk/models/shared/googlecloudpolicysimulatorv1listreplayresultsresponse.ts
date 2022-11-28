import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1ReplayResult } from "./googlecloudpolicysimulatorv1replayresult";



// GoogleCloudPolicysimulatorV1ListReplayResultsResponse
/** 
 * Response message for Simulator.ListReplayResults.
**/
export class GoogleCloudPolicysimulatorV1ListReplayResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=replayResults", elemType: GoogleCloudPolicysimulatorV1ReplayResult })
  replayResults?: GoogleCloudPolicysimulatorV1ReplayResult[];
}
