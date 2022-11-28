import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcRule } from "./gcrule";
import { ColumnFamilyStats } from "./columnfamilystats";



// ColumnFamily
/** 
 * A set of columns within a table which share a common configuration.
**/
export class ColumnFamily extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcRule" })
  gcRule?: GcRule;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: ColumnFamilyStats;
}
