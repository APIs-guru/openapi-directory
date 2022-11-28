import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
/**
 * The request for Datastore.ReserveIds.
**/
export declare class ReserveIdsRequest extends SpeakeasyBase {
    databaseId?: string;
    keys?: Key[];
}
