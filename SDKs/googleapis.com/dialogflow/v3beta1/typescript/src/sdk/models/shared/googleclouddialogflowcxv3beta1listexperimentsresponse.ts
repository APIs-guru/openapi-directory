import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Experiment } from "./googleclouddialogflowcxv3beta1experiment";


// GoogleCloudDialogflowCxV3beta1ListExperimentsResponse
/** 
 * The response message for Experiments.ListExperiments.
**/
export class GoogleCloudDialogflowCxV3beta1ListExperimentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=experiments", elemType: shared.GoogleCloudDialogflowCxV3beta1Experiment })
  experiments?: GoogleCloudDialogflowCxV3beta1Experiment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
