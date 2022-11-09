import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Experiment } from "./googleclouddialogflowcxv3experiment";


// GoogleCloudDialogflowCxV3ListExperimentsResponse
/** 
 * The response message for Experiments.ListExperiments.
**/
export class GoogleCloudDialogflowCxV3ListExperimentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=experiments", elemType: shared.GoogleCloudDialogflowCxV3Experiment })
  experiments?: GoogleCloudDialogflowCxV3Experiment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
