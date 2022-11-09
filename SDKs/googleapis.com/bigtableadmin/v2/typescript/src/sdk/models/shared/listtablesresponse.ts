import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Table } from "./table";


// ListTablesResponse
/** 
 * Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables
**/
export class ListTablesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tables", elemType: shared.Table })
  tables?: Table[];
}
