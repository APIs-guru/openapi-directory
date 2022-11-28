import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
/**
 * The request for Datastore.AllocateIds.
**/
export declare class AllocateIdsRequest extends SpeakeasyBase {
    databaseId?: string;
    keys?: Key[];
}
