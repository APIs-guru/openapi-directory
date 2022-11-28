import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";
/**
 * Response of MatchIntent.
**/
export declare class GoogleCloudDialogflowCxV3MatchIntentResponse extends SpeakeasyBase {
    currentPage?: GoogleCloudDialogflowCxV3Page;
    matches?: GoogleCloudDialogflowCxV3Match[];
    text?: string;
    transcript?: string;
    triggerEvent?: string;
    triggerIntent?: string;
}
