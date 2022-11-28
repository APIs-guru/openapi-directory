import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Oracle Column.
**/
export declare class OracleColumn extends SpeakeasyBase {
    columnName?: string;
    dataType?: string;
    encoding?: string;
    length?: number;
    nullable?: boolean;
    ordinalPosition?: number;
    precision?: number;
    primaryKey?: boolean;
    scale?: number;
}
