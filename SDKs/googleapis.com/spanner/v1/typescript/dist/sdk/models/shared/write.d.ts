import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Arguments to insert, update, insert_or_update, and replace operations.
**/
export declare class Write extends SpeakeasyBase {
    columns?: string[];
    table?: string;
    values?: any[][];
}
