import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
**/
export declare class KeyRangeLocation extends SpeakeasyBase {
    dataDisk?: string;
    deliveryEndpoint?: string;
    deprecatedPersistentDirectory?: string;
    end?: string;
    start?: string;
}
