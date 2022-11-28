import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { EntityResult } from "./entityresult";
/**
 * The response for Datastore.Lookup.
**/
export declare class LookupResponse extends SpeakeasyBase {
    deferred?: Key[];
    found?: EntityResult[];
    missing?: EntityResult[];
    readTime?: string;
}
