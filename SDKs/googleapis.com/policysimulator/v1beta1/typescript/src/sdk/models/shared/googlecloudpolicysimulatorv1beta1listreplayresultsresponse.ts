import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPolicysimulatorV1beta1ReplayResult } from "./googlecloudpolicysimulatorv1beta1replayresult";


// GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse
/** 
 * Response message for Simulator.ListReplayResults.
**/
export class GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=replayResults", elemType: shared.GoogleCloudPolicysimulatorV1beta1ReplayResult })
  replayResults?: GoogleCloudPolicysimulatorV1beta1ReplayResult[];
}
