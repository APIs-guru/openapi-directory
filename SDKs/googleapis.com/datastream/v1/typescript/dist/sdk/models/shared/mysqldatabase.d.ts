import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlTable } from "./mysqltable";
/**
 * MySQL database.
**/
export declare class MysqlDatabase extends SpeakeasyBase {
    database?: string;
    mysqlTables?: MysqlTable[];
}
