import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OracleSchema } from "./oracleschema";


// OracleRdbms
/** 
 * Oracle database structure.
**/
export class OracleRdbms extends SpeakeasyBase {
  @Metadata({ data: "json, name=oracleSchemas", elemType: shared.OracleSchema })
  oracleSchemas?: OracleSchema[];
}
