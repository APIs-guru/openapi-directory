import { SpeakeasyBase } from "../../../internal/utils";
import { RestorePlan } from "./restoreplan";
/**
 * Response message for ListRestorePlans.
**/
export declare class ListRestorePlansResponse extends SpeakeasyBase {
    nextPageToken?: string;
    restorePlans?: RestorePlan[];
    unreachable?: string[];
}
