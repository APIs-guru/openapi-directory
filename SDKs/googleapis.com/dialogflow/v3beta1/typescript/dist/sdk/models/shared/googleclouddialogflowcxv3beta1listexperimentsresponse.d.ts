import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Experiment } from "./googleclouddialogflowcxv3beta1experiment";
/**
 * The response message for Experiments.ListExperiments.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListExperimentsResponse extends SpeakeasyBase {
    experiments?: GoogleCloudDialogflowCxV3beta1Experiment[];
    nextPageToken?: string;
}
