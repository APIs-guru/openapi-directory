import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables
**/
export declare class ListTablesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tables?: Table[];
}
