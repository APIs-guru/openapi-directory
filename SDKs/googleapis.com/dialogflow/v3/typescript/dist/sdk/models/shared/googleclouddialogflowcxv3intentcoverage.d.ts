import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3IntentCoverageIntent } from "./googleclouddialogflowcxv3intentcoverageintent";
/**
 * Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
**/
export declare class GoogleCloudDialogflowCxV3IntentCoverage extends SpeakeasyBase {
    coverageScore?: number;
    intents?: GoogleCloudDialogflowCxV3IntentCoverageIntent[];
}
