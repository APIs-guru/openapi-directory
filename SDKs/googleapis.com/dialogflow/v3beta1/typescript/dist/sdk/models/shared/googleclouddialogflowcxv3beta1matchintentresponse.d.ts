import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1Match } from "./googleclouddialogflowcxv3beta1match";
/**
 * Response of MatchIntent.
**/
export declare class GoogleCloudDialogflowCxV3beta1MatchIntentResponse extends SpeakeasyBase {
    currentPage?: GoogleCloudDialogflowCxV3beta1Page;
    matches?: GoogleCloudDialogflowCxV3beta1Match[];
    text?: string;
    transcript?: string;
    triggerEvent?: string;
    triggerIntent?: string;
}
