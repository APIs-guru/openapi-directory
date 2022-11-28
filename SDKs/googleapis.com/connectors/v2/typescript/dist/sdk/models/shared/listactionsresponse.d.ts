import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
/**
 * Response message for ActionService.ListActions
**/
export declare class ListActionsResponse extends SpeakeasyBase {
    actions?: Action[];
    nextPageToken?: string;
    unsupportedActionNames?: string[];
}
