import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message type to initiate a read-only transaction.
**/
export declare class ReadOnly extends SpeakeasyBase {
    exactStaleness?: string;
    maxStaleness?: string;
    minReadTimestamp?: string;
    readTimestamp?: string;
    returnReadTimestamp?: boolean;
    strong?: boolean;
}
