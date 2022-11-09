import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DropRowRangeRequest
/** 
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange
**/
export class DropRowRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleteAllDataFromTable" })
  deleteAllDataFromTable?: boolean;

  @Metadata({ data: "json, name=rowKeyPrefix" })
  rowKeyPrefix?: string;
}
