import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPolicysimulatorV1ReplayResult } from "./googlecloudpolicysimulatorv1replayresult";


// GoogleCloudPolicysimulatorV1ListReplayResultsResponse
/** 
 * Response message for Simulator.ListReplayResults.
**/
export class GoogleCloudPolicysimulatorV1ListReplayResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=replayResults", elemType: shared.GoogleCloudPolicysimulatorV1ReplayResult })
  replayResults?: GoogleCloudPolicysimulatorV1ReplayResult[];
}
