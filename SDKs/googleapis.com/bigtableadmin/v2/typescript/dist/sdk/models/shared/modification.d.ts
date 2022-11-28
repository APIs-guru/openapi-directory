import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnFamily } from "./columnfamily";
/**
 * A create, update, or delete of a particular column family.
**/
export declare class Modification extends SpeakeasyBase {
    create?: ColumnFamily;
    drop?: boolean;
    id?: string;
    update?: ColumnFamily;
}
