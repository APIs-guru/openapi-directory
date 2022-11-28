import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DropRowRangeRequest
/** 
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange
**/
export class DropRowRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleteAllDataFromTable" })
  deleteAllDataFromTable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rowKeyPrefix" })
  rowKeyPrefix?: string;
}
