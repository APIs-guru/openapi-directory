import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { ReadOptions } from "./readoptions";
/**
 * The request for Datastore.Lookup.
**/
export declare class LookupRequest extends SpeakeasyBase {
    keys?: Key[];
    readOptions?: ReadOptions;
}
