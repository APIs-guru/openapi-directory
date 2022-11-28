import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlObjectIdentifier } from "./mysqlobjectidentifier";
import { OracleObjectIdentifier } from "./oracleobjectidentifier";



// SourceObjectIdentifier
/** 
 * Represents an identifier of an object in the data source.
**/
export class SourceObjectIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlIdentifier" })
  mysqlIdentifier?: MysqlObjectIdentifier;

  @SpeakeasyMetadata({ data: "json, name=oracleIdentifier" })
  oracleIdentifier?: OracleObjectIdentifier;
}
