import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.
**/
export declare class SingleClusterRouting extends SpeakeasyBase {
    allowTransactionalWrites?: boolean;
    clusterId?: string;
}
