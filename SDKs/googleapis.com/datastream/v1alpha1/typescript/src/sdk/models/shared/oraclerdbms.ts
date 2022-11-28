import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OracleSchema } from "./oracleschema";



// OracleRdbms
/** 
 * Oracle database structure.
**/
export class OracleRdbms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oracleSchemas", elemType: OracleSchema })
  oracleSchemas?: OracleSchema[];
}
