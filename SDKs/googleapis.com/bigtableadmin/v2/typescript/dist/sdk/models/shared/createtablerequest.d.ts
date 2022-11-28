import { SpeakeasyBase } from "../../../internal/utils";
import { Split } from "./split";
import { TableInput } from "./table";
/**
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable
**/
export declare class CreateTableRequestInput extends SpeakeasyBase {
    initialSplits?: Split[];
    table?: TableInput;
    tableId?: string;
}
