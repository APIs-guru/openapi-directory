import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlColumn } from "./mysqlcolumn";
/**
 * MySQL table.
**/
export declare class MysqlTable extends SpeakeasyBase {
    mysqlColumns?: MysqlColumn[];
    table?: string;
}
