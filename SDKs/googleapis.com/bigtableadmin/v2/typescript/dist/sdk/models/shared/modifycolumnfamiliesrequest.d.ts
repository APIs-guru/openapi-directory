import { SpeakeasyBase } from "../../../internal/utils";
import { Modification } from "./modification";
/**
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies
**/
export declare class ModifyColumnFamiliesRequest extends SpeakeasyBase {
    modifications?: Modification[];
}
