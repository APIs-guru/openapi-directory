import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Experiment } from "./googleclouddialogflowcxv3beta1experiment";



// GoogleCloudDialogflowCxV3beta1ListExperimentsResponse
/** 
 * The response message for Experiments.ListExperiments.
**/
export class GoogleCloudDialogflowCxV3beta1ListExperimentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=experiments", elemType: GoogleCloudDialogflowCxV3beta1Experiment })
  experiments?: GoogleCloudDialogflowCxV3beta1Experiment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
