import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1beta1ReplayResult } from "./googlecloudpolicysimulatorv1beta1replayresult";



// GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse
/** 
 * Response message for Simulator.ListReplayResults.
**/
export class GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=replayResults", elemType: GoogleCloudPolicysimulatorV1beta1ReplayResult })
  replayResults?: GoogleCloudPolicysimulatorV1beta1ReplayResult[];
}
