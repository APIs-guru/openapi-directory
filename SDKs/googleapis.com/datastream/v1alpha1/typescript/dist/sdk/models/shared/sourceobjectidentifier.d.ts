import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlObjectIdentifier } from "./mysqlobjectidentifier";
import { OracleObjectIdentifier } from "./oracleobjectidentifier";
/**
 * Represents an identifier of an object in the data source.
**/
export declare class SourceObjectIdentifier extends SpeakeasyBase {
    mysqlIdentifier?: MysqlObjectIdentifier;
    oracleIdentifier?: OracleObjectIdentifier;
}
