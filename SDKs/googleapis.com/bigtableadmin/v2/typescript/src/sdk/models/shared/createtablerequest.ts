import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Split } from "./split";
import { Table } from "./table";


// CreateTableRequest
/** 
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable
**/
export class CreateTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=initialSplits", elemType: shared.Split })
  initialSplits?: Split[];

  @Metadata({ data: "json, name=table" })
  table?: Table;

  @Metadata({ data: "json, name=tableId" })
  tableId?: string;
}
