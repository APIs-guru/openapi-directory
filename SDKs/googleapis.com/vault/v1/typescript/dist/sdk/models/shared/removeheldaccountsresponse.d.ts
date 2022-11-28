import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Response for batch delete held accounts.
**/
export declare class RemoveHeldAccountsResponse extends SpeakeasyBase {
    statuses?: Status[];
}
