import { SpeakeasyBase } from "../../../internal/utils";
/**
 * MySQL Column.
**/
export declare class MysqlColumn extends SpeakeasyBase {
    collation?: string;
    column?: string;
    dataType?: string;
    length?: number;
    nullable?: boolean;
    ordinalPosition?: number;
    primaryKey?: boolean;
}
