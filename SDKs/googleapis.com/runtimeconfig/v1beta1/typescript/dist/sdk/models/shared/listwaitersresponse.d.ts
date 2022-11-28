import { SpeakeasyBase } from "../../../internal/utils";
import { Waiter } from "./waiter";
/**
 * Response for the `ListWaiters()` method. Order of returned waiter objects is arbitrary.
**/
export declare class ListWaitersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    waiters?: Waiter[];
}
