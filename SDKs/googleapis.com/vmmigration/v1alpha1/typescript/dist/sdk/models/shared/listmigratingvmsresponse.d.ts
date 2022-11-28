import { SpeakeasyBase } from "../../../internal/utils";
import { MigratingVm } from "./migratingvm";
/**
 * Response message for 'ListMigratingVms' request.
**/
export declare class ListMigratingVmsResponse extends SpeakeasyBase {
    migratingVms?: MigratingVm[];
    nextPageToken?: string;
    unreachable?: string[];
}
