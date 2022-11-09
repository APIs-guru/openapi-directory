import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OracleColumn } from "./oraclecolumn";


// OracleTable
/** 
 * Oracle table.
**/
export class OracleTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=oracleColumns", elemType: shared.OracleColumn })
  oracleColumns?: OracleColumn[];

  @Metadata({ data: "json, name=tableName" })
  tableName?: string;
}
