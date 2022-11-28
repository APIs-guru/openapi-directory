import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructType } from "./structtype";
import { Transaction } from "./transaction";



// ResultSetMetadata
/** 
 * Metadata about a ResultSet or PartialResultSet.
**/
export class ResultSetMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rowType" })
  rowType?: StructType;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: Transaction;

  @SpeakeasyMetadata({ data: "json, name=undeclaredParameters" })
  undeclaredParameters?: StructType;
}
