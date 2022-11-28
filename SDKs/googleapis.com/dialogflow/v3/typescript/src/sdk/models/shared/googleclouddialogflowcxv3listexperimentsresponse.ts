import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Experiment } from "./googleclouddialogflowcxv3experiment";



// GoogleCloudDialogflowCxV3ListExperimentsResponse
/** 
 * The response message for Experiments.ListExperiments.
**/
export class GoogleCloudDialogflowCxV3ListExperimentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=experiments", elemType: GoogleCloudDialogflowCxV3Experiment })
  experiments?: GoogleCloudDialogflowCxV3Experiment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
