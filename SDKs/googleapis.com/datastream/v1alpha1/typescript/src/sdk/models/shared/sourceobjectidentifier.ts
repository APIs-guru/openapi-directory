import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MysqlObjectIdentifier } from "./mysqlobjectidentifier";
import { OracleObjectIdentifier } from "./oracleobjectidentifier";


// SourceObjectIdentifier
/** 
 * Represents an identifier of an object in the data source.
**/
export class SourceObjectIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlIdentifier" })
  mysqlIdentifier?: MysqlObjectIdentifier;

  @Metadata({ data: "json, name=oracleIdentifier" })
  oracleIdentifier?: OracleObjectIdentifier;
}
