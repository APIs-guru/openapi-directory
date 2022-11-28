import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Experiment } from "./googleclouddialogflowcxv3experiment";
/**
 * The response message for Experiments.ListExperiments.
**/
export declare class GoogleCloudDialogflowCxV3ListExperimentsResponse extends SpeakeasyBase {
    experiments?: GoogleCloudDialogflowCxV3Experiment[];
    nextPageToken?: string;
}
