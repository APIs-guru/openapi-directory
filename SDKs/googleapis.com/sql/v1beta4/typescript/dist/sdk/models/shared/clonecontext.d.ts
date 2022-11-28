import { SpeakeasyBase } from "../../../internal/utils";
import { BinLogCoordinates } from "./binlogcoordinates";
/**
 * Database instance clone context.
**/
export declare class CloneContext extends SpeakeasyBase {
    allocatedIpRange?: string;
    binLogCoordinates?: BinLogCoordinates;
    databaseNames?: string[];
    destinationInstanceName?: string;
    kind?: string;
    pitrTimestampMs?: string;
    pointInTime?: string;
}
