import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OracleTable } from "./oracletable";


// OracleSchema
/** 
 * Oracle schema.
**/
export class OracleSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=oracleTables", elemType: shared.OracleTable })
  oracleTables?: OracleTable[];

  @Metadata({ data: "json, name=schemaName" })
  schemaName?: string;
}
