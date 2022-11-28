import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
**/
export declare class KeyRangeDataDiskAssignment extends SpeakeasyBase {
    dataDisk?: string;
    end?: string;
    start?: string;
}
