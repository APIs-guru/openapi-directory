import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StructType } from "./structtype";
import { Transaction } from "./transaction";
import { StructType } from "./structtype";


// ResultSetMetadata
/** 
 * Metadata about a ResultSet or PartialResultSet.
**/
export class ResultSetMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=rowType" })
  rowType?: StructType;

  @Metadata({ data: "json, name=transaction" })
  transaction?: Transaction;

  @Metadata({ data: "json, name=undeclaredParameters" })
  undeclaredParameters?: StructType;
}
