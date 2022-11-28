import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OracleTable } from "./oracletable";



// OracleSchema
/** 
 * Oracle schema.
**/
export class OracleSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oracleTables", elemType: OracleTable })
  oracleTables?: OracleTable[];

  @SpeakeasyMetadata({ data: "json, name=schemaName" })
  schemaName?: string;
}
