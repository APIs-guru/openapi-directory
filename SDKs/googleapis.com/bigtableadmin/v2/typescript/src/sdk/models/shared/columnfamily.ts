import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcRule } from "./gcrule";


// ColumnFamily
/** 
 * A set of columns within a table which share a common configuration.
**/
export class ColumnFamily extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcRule" })
  gcRule?: GcRule;
}
