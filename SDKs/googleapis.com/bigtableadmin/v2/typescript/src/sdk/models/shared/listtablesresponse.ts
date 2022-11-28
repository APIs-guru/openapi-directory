import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";



// ListTablesResponse
/** 
 * Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables
**/
export class ListTablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tables", elemType: Table })
  tables?: Table[];
}
