import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PostgreSQL Column.
**/
export declare class PostgresqlColumn extends SpeakeasyBase {
    column?: string;
    dataType?: string;
    length?: number;
    nullable?: boolean;
    ordinalPosition?: number;
    precision?: number;
    primaryKey?: boolean;
    scale?: number;
}
