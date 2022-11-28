import { SpeakeasyBase } from "../../../internal/utils";
import { GcRule } from "./gcrule";
import { ColumnFamilyStats } from "./columnfamilystats";
/**
 * A set of columns within a table which share a common configuration.
**/
export declare class ColumnFamily extends SpeakeasyBase {
    gcRule?: GcRule;
    stats?: ColumnFamilyStats;
}
