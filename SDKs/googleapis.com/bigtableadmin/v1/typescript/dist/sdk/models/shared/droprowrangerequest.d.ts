import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange
**/
export declare class DropRowRangeRequest extends SpeakeasyBase {
    deleteAllDataFromTable?: boolean;
    rowKeyPrefix?: string;
}
