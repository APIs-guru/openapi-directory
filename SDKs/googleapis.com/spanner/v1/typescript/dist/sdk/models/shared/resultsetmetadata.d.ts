import { SpeakeasyBase } from "../../../internal/utils";
import { StructType } from "./structtype";
import { Transaction } from "./transaction";
/**
 * Metadata about a ResultSet or PartialResultSet.
**/
export declare class ResultSetMetadata extends SpeakeasyBase {
    rowType?: StructType;
    transaction?: Transaction;
    undeclaredParameters?: StructType;
}
